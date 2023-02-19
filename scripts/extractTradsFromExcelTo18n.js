const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const {GoogleSpreadsheet} = require('google-spreadsheet');

const LANGUAGES = ['fr', 'en'];
const SPREADSHEET_KEY = '1805qMcZi7Wd__ADFxPsj31wq4Rgl2ViD_mcgWaRWOI0';
const API_KEY = 'AIzaSyBY5k4gVzFpaYgaGlNaNzHO3jpmPfxjnOQ';
const I18N_DIRECTORY = path.join(__dirname, '../src/assets/i18n');

(async function extract() {
  console.log('Connecting to google spreadsheet...');
  const doc = new GoogleSpreadsheet(SPREADSHEET_KEY);
  await doc.useApiKey(API_KEY);
  await doc.loadInfo();
  await retrieveAndSaveTrads(doc, I18N_DIRECTORY);

  async function retrieveAndSaveTrads(info, directory) {

    let jsonData = {}
    const i18n = {};
    _.each(LANGUAGES, (language) => (i18n[language] = {}));
    // await _.each(LANGUAGES, async (language) => {
    //   i18n[language] = {};
    //   const filePath = path.join(directory, language + '.json');
    //   await fs.unlink(filePath, function () {
    //     console.log('delete! ' + filePath)
    //   });
    // });

    await _.each(info.sheetsById, async (sheet) => {
      const rows = await sheet.getRows();

      _.each(rows, (row, index) => {
        const keys = formatCell(row['KEYS']);
        const variables = formatCell(row['VARS']);
        if (_.isArray(keys) && keys.length > 0) {
          _.each(LANGUAGES, async (language) => {
            const value = row[language];
            if (value) {
              value.replace(/  +/g, ' ');
              await assignValue(i18n, language, keys, variables, value);
            }
          });
        }
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory);
        }
        if (rows.length === index + 1)
          _.each(LANGUAGES, (language, index) => {
            const filePath = path.join(directory, language + '.json');
            jsonData = Object.assign(jsonData, i18n[language]);
            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
            if (language.length === index + 1)
              console.log('Extracted from ' + sheet.title + ': ' + rows.length + ' rows', 'and saved in json i18n.');
          });
      });

    });
  }
})();

function assignValue(i18n, language, keys, variables, value) {
  _.each(keys, (key) => {
    if (!_.isEmpty(key)) {
      let tree = key.split('.');
      let object = getObjectFromTree(i18n[language], tree.slice(0, tree.length - 1));
      let val = parseValue(value, variables);
      if (!_.isEmpty(val)) {
        object[tree[tree.length - 1]] = val;
      }
    }
  });
}

function parseValue(value, letiables) {
  if (_.isEmpty(letiables)) return value;
  let parsed = value;
  _.each(letiables, (letiable, index) => {
    if (!_.isEmpty(letiable)) {
      parsed = parsed.replace(new RegExp('\\[' + (index + 1) + '\\]', 'g'), '{{' + letiable + '}}');
    }
  });
  return parsed;
}

function getObjectFromTree(object, tree) {
  let key = tree.splice(0, 1)[0];
  if (!object[key]) object[key] = {};

  return tree.length > 0 ? getObjectFromTree(object[key], tree) : object[key];
}

function formatCell(cell) {
  if (_.isEmpty(cell)) return cell;
  return cell
    .replace(/(\r\n|\n|\r)/gm, '', '')
    .replace(/ /g, '')
    .split(',');
}

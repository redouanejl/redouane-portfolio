import {Component, OnInit} from '@angular/core';
import {Person} from "./models/person";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  languages!: any[];

  selectedLanguage: any;

  person: Person = {
    firstName: 'Redouane',
    lastName: 'Jalil',
    address: 'personnal.address.key',
    email: 'jredouane7@gmail.com',
    phoneNumber: '(+212) 6-8080-4009',
    introduction: 'personnal.presentation.key',
    experiences: [
      {
        role: 'experience.role.key',
        company: 'Caf-technologies',
        description: 'experience.description.key',
        date: 'experience.date.key'
      },
      {
        role: 'experience.role.key',
        company: 'Binarios-IT',
        description: 'experience.description.key',
        date: 'experience.date.key'
      },
      {
        role: 'experience.role.key',
        company: 'Optimum-Strategies',
        description: 'experience.description.key',
        date: 'experience.date.key'
      },
      {
        role: 'experience.role.key',
        company: 'AfriData',
        description: 'experience.description.key',
        date: 'experience.date.key'
      },
      {
        role: 'experience.role.key',
        company: 'Advanced Systems',
        description: 'experience.description.key',
        date: 'experience.date.key'
      },
      {
        role: 'experience.role.key',
        company: 'Office Nationale des péches (ONP)',
        description: 'experience.description.key',
        date: 'experience.date.key'
      },
    ],
    educations: [
      {
        schoolName: 'education.school.key',
        degree: 'education.degree.key',
        domain: 'education.domain.key',
        mention: 'education.mention.key',
        date: 'education.date.key'
      },
      {
        schoolName: 'education.school.key',
        degree: 'education.degree.key',
        domain: 'education.domain.key',
        mention: 'education.mention.key',
        date: 'education.date.key'
      },
      {
        schoolName: 'education.school.key',
        degree: 'education.degree.key',
        domain: 'education.domain.key',
        mention: 'education.mention.key',
        date: 'education.date.key'
      },
      {
        schoolName: 'education.school.key',
        degree: 'education.degree.key',
        domain: 'education.domain.key',
        mention: 'education.mention.key',
        date: 'education.date.key'
      },
      {
        schoolName: 'education.school.key',
        degree: 'education.degree.key',
        domain: 'education.domain.key',
        mention: 'education.mention.key',
        date: 'education.date.key'
      },
      {
        schoolName: 'education.school.key',
        degree: 'education.degree.key',
        domain: 'education.domain.key',
        mention: 'education.mention.key',
        date: 'education.date.key'
      }
    ],
    interests: 'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.\n' +
      '\n' +
      'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.'
  }

  constructor(
    private translate: TranslateService,
  ) {
    let language = localStorage.getItem('language');
    if (language){
      translate.setDefaultLang(language);
    }else{
      translate.setDefaultLang('fr');
    }

  }

  ngOnInit(): void {
    this.languages  = [
      { name: 'general.language.french.key', flag: 'france.png', code: 'fr'},
      { name: 'general.language.english.key' , flag: 'uk.png', code: 'en'},
    ];
    let language = localStorage.getItem('language');
    if (language){
      this.selectedLanguage = this.languages.find(l => l.code === language);
    }
  }

  onChangeLanguage(event: any): void {
    localStorage.removeItem('language');
    localStorage.setItem('language', event?.value.code);
    this.translate.setDefaultLang(event?.value.code);
  }
}

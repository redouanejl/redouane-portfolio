import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  programmingSkills = [
    { name: 'Html 5 ', image: 'html5.png'},
    { name: 'Css 3 ', image: 'css3.png'},
    { name: 'Sass ', image: 'sass.png'},
    { name: 'Javascript ', image: 'javascript.png'},
    { name: 'Bootstrap ', image: 'bootstrap.png'},
    { name: 'Prime ng ', image: 'prime-ng.png'},
    { name: 'Typescript ', image: 'typescript.png'},
    { name: 'Angular ', image: 'angular.png'},
    { name: 'React ', image: 'react.png'},
    { name: 'Ionic ', image: 'ionic.png'},
    { name: 'Java ', image: 'java.png'},
    { name: 'Php ', image: 'php.png'},
    { name: 'Spring', image: 'spring.png'},
    { name: 'JUnit', image: 'junit.png'},
    { name: 'Spring Boot', image: 'spring-boot.png'},
    { name: 'Spring Security', image: 'spring-security.png'},
    { name: 'JWT', image: 'jwt.png'},
    { name: 'Microservices', image: 'microservice.png'},
    { name: 'MySql', image: 'mysql.png'},
    { name: 'Sql server', image: 'sql.png'},
    { name: 'Postgresql', image: 'postgresql.png'},
    { name: 'Oracle', image: 'oracle.png'},
    { name: 'Scrum Method', image: 'scrum.png'},
    { name: 'Architecture & Uml', image: 'uml.png'},
    { name: 'Linux', image: 'linux.png'},
  ];

  personnalSkills = [
    {name: 'Rigor' , key: 'skills.personnal.key'},
    {name: 'Sense of responsibility' , key: 'skills.personnal.key'},
    {name: 'problems resolving' , key: 'skills.personnal.key'},
    {name: 'curiosity' , key: 'skills.personnal.key'},
    {name: 'Adaptability' , key: 'skills.personnal.key'},
    {name: 'Creativity' , key: 'skills.personnal.key'},
    {name: 'Teamwork' , key: 'skills.personnal.key'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

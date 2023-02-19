import {Component, Input, OnInit} from '@angular/core';
import {Education} from "../../models/education";

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  @Input() educations!: Education[];

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../models/experience";

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {

  @Input() experiences!: Experience[];

  constructor() { }

  ngOnInit(): void {
  }

}

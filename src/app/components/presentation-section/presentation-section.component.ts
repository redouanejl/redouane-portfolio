import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../models/person";

@Component({
  selector: 'app-presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.css']
})
export class PresentationSectionComponent implements OnInit {

  @Input() person!: Person;

  value!: Date;

  constructor() { }

  ngOnInit(): void {
  }

}

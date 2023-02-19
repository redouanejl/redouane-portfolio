import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.component.html',
  styleUrls: ['./interests-section.component.css']
})
export class InterestsSectionComponent implements OnInit {

  @Input() interests!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

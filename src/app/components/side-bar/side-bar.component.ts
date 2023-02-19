import {Component, Input, OnInit} from '@angular/core';
import {SideMenuItems} from "../../models/sideMenuItems";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {ScrollService} from "../../services/scroll.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() ImageUrl!: string;

  @Input() personName!: string

  sideManuItems: SideMenuItems[] = [
    {name: 'About', header: 'general.about.key', url: '#about'},
    {name: 'Experience', header: 'general.experiences.key', url: '#experience'},
    {name: 'Education', header: 'general.education.key', url: '#education'},
    {name: 'Skills', header: 'general.skills.key', url: '#skills'},
/*
    {name: 'Interests', header: 'general.interests.key', url: '#interests'}
*/
  ];

  activeFragment?: string | null;


  constructor(private translate: TranslateService,
              private activatedRoute: ActivatedRoute,
              private scrollService: ScrollService,
              private location: Location) {
    scrollService.currentSection.subscribe(
      (res) => {
        if (('#' + res) !== this.activeFragment) {
          this.activeFragment = ('#' + res);
          this.location.go(('#' + res));
        }
      }
    )
  }

  ngOnInit(): void {
    // @ts-ignore
    this.activatedRoute.fragment.subscribe(fragment => {
      this.activeFragment = '#' + fragment;
    });
  }

  checkActive(item: any): string {
    if (item.url == this.activeFragment) {
      return 'active';
    }
    return '';
  }
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {PresentationSectionComponent} from './components/presentation-section/presentation-section.component';
import {ExperienceSectionComponent} from './components/experience-section/experience-section.component';
import {EducationSectionComponent} from './components/education-section/education-section.component';
import {SkillsSectionComponent} from './components/skills-section/skills-section.component';
import {InterestsSectionComponent} from './components/interests-section/interests-section.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PresentationSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    InterestsSectionComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        InputTextModule,
        DropdownModule,
        TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

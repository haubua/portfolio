import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSectionComponent } from './start-section/start-section.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


@NgModule({
  declarations: [
    AppComponent,
    StartSectionComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

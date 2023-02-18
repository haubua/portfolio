import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillImg: string[] = ['angular.png', 'typescript.png', 'javascript.png', 'html.png', 'css.png', 'firebase.png', 'git.png', 'scrum.png', 'api.png', 'materialDesign.png']
  skillText: string[] = ['Angular', 'Typescript', 'Javascript', 'Html', 'Css', 'Firebase', 'Git', 'Scrum', 'Rest-Api', 'Material Design']
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: string[] = ['laptop.png', 'polloLoco.png', 'pokedex.png', 'rof.png'];
  projectHeadline: string[] = ['Join', 'El Pollo Loco', 'Pokédex', 'Ring of Fire'];
  projectTypes: string[] = ['HTML | CSS | JavaScript | Backend', 'HTML | CSS | Javascript | Object Orientation', 'HTML | CSS | Javascript | API', 'HTML | SCSS | TypeScript | Angular | Firebase | Material Design'];
  projectDescription: string[] = [
    'Join is a Kanbanboard web app written with HTML, CSS and JavaScript. In this project, the client - server functionality was simulated with a mini-backend (More information can be found in the repository smallest_backend_ever).',
    'El Pollo Loco is a small browser game writeten with HTML, CSS and JavaScript. The fpcus is on object-oriented programming with JavaScript.',
    'With Pokédex I can get a perfect overview of all Pokémons, with the integrated searchfunction you can find the pokemon you are looking for faster. The project was created with HTML, CSS and JavaScript and all data is fetched from a REST API. ',
    'Ring of Fire also known as Circle of Death is a drinking game with cards. By connecting to Google Firebase, the game is shared with others and can played online with all of your friends.',
  ];
  projectlink: string[] = ['http://robert-hahn.developerakademie.net/login.html', 'https://robert-hahn.developerakademie.net/elpolloloco/index.html', 'https://robert-hahn.developerakademie.net/pokedex/index.html', 'https://robert-hahn.developerakademie.net/ringoffire/'];
  githublink: string[] = ['https://github.com/haubua/Join', 'https://github.com/haubua/El-Pollo-Loco', 'https://github.com/haubua/pokedex', 'https://github.com/haubua/ringoffire/tree/main/ringoffire-main/ringoffire-main'];
}

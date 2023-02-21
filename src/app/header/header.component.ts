import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  constructor(private home: HomeComponent) {}
  dropdown: boolean;


  ngOnInit() {
    this.home.getValue().subscribe((value) => {
      this.dropdown = this.home.dropdown.value
    })
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  openMenu() {
    document.getElementById('dropdown')?.classList.add('dropdown');
    document.getElementById('dropdown')?.classList.remove('d-none')
    this.home.setValue(false);
  }

  closeMenu() {
    document.getElementById('dropdown')?.classList.remove('dropdown');
    document.getElementById('dropdown')?.classList.add('d-none');
    this.home.setValue(true)
  } 
}
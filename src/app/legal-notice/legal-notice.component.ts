import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(private home: HomeComponent) { }
  dropdown: boolean;


  ngOnInit() {
    this.home.getValue().subscribe((value) => {
      this.dropdown = this.home.dropdown.value
      if (this.dropdown == true) {
        document.getElementById('legalNotice').classList.remove('overflow');
      } else {
        document.getElementById('legalNotice').classList.add('overflow');
      }
    })
  }
}

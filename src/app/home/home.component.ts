import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class HomeComponent implements OnInit {
  public dropdown: BehaviorSubject<boolean>;

    constructor() {
      this.dropdown = new BehaviorSubject<boolean> (true);
    }

  getValue(): Observable<boolean> {
    return this.dropdown.asObservable();
  }
  

  setValue(newValue): void {
    this.dropdown.next(newValue);
  }


 ngOnInit(): void {
  this.getValue().subscribe((value) => {
    console.log(this.dropdown.value)
  })
 }

 
 
}

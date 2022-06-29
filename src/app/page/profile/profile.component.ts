import { Component, OnInit } from '@angular/core';
import { Application } from '../../data/application';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  city: any = "Push notification";
  public applications: Application[] = [
    {'name':'EBOO', 'image':'eboo-logo.png', 'category':'bancaire'},
    {'name':'R-Net', 'image':'raffeisen-logo.jpg', 'category':'bancaire'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

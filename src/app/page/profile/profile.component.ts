import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';
import { Application } from '../../data/application';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  city: any = "Push notification";
  public applications: Application[] = Application.myApplications;
  public isB2B: boolean=false

  constructor(private router: Router, public loginService: LoginService) {
    this.isB2B = loginService.isB2BValue
  }

  ngOnInit(): void {
    console.log("[ProfileComponent] ngOnInit")
    this.loginService.isB2B$.subscribe(isB2B => {console.log("[ProfileComponent] isB2B : " + isB2B); this.isB2B = isB2B})
  }

}

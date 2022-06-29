import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  handleClick(event : any): void{
    console.log("test" + event)
    this.loginService.connect();
    this.router.navigate(['profile']);
  }

}

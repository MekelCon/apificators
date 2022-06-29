import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDialogForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router, 
              private loginService: LoginService) 
    { 
      this.loginDialogForm = this.formBuilder.group({
        login: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
  }

  submitLogin() {
        let login: string = this.loginDialogForm.controls['login'].value;
        this.loginService.connect(login);
        this.router.navigate(['profile']);
  }
}

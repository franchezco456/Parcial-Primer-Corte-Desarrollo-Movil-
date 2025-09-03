import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/user/user';
import { IUserLogin } from '../interfaces/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  public email !: FormControl;
  public password !: FormControl;
  public loginForm !: FormGroup;
  constructor(private readonly userSrv: User) { 
    this.initForm();
  }
  public doLogin(){
    console.log(this.loginForm.value);
    this.userSrv.login(this.loginForm.value);
    this.loginForm.reset();
  }

  ngOnInit() {}

  private initForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required] );

    this.loginForm = new FormGroup({
        email: this.email,
        password: this.password
    })
}
}

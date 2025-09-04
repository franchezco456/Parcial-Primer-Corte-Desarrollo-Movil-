import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/user/user';
import { IUserLogin } from '../interfaces/IUser';
import { Storage } from 'src/app/shared/providers/storage/storage';
import { Uuid } from 'src/app/shared/providers/uuid/uuid';
import { Router } from '@angular/router';

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
  constructor(private readonly userSrv: User, private storageSrv: Storage, private router:Router) { 
    this.initForm();
  }
  public doLogin(){
    console.log(this.loginForm.value);
    const user = this.userSrv.login(this.loginForm.value);
    if (user){
    this.storageSrv.set('AUTH', JSON.stringify({uuid:user.uuid}));
    this.loginForm.reset();
    this.router.navigate(['/home']);
    }
    this.loginForm.reset();
  }
  public goToRegister() {
  this.router.navigate(['/register']);
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/core/services/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
    public name !: FormControl;
    public lastname !: FormControl;
    public email !: FormControl;
    public country !: FormControl;
    public password !: FormControl;
    public Cpassword !: FormControl;
    public registerForm !: FormGroup;
    constructor(private readonly userSrv : User, private router:Router) {
      this.initForm();
    }
    public doRegister(){
      console.log(this.registerForm.value);
      if(this.userSrv.register(this.registerForm.value)){
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }
        this.registerForm.reset();
    }

    public goLogin(){
      this.router.navigate(['/login']);
    }
    ngOnInit() {}

    private initForm(){
      this.name = new FormControl('', [Validators.required]);
      this.lastname = new FormControl('', [Validators.required]);
      this.country = new FormControl('', [Validators.required]);
      this.email = new FormControl('', [Validators.required, Validators.email]);
      this.password = new FormControl('', [Validators.required, Validators.minLength(3)]);
      this.Cpassword = new FormControl ('', [Validators.required, Validators.minLength(3)]);
      
      this.registerForm = new FormGroup({
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        country: this.country,
        password: this.password,
        Cpassword: this.Cpassword
      });
    }
}


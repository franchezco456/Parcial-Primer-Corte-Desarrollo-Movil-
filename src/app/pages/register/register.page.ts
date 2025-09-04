import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/user/user';

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
    constructor(private readonly userSrv : User) {
      this.initForm();
    }
    public doRegister(){
      console.log(this.registerForm.value);
      this.userSrv.register(this.registerForm.value);
      this.registerForm.reset();
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
      })
    }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/core/services/user/user';
import { Router } from '@angular/router';
import { Data_Country, ICountry } from '../interfaces/Icountries';
import { Http } from 'src/app/core/providers/http/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
    public url = environment.countriespi.baseUrl;
    public countries : Data_Country [] = [];
    public name !: FormControl;
    public lastname !: FormControl;
    public email !: FormControl;
    public country !: FormControl;
    public password !: FormControl;
    public Cpassword !: FormControl;
    public registerForm !: FormGroup;
    constructor(private readonly userSrv : User, private router:Router, private http:Http) {
      this.initForm();
      this.loadCountries();
    }
    public doRegister(){
      console.log(this.registerForm.value);
      if(this.userSrv.register(this.registerForm.value)){
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }
        this.registerForm.reset();
    }

    public async loadCountries(){
          const countriesDATA: ICountry = await this.http.getcountries(this.url);
          this.countries= countriesDATA.data ;
          console.log(this.countries);
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


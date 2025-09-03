import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './services/user/user';
import { Uuid } from './providers/uuid/uuid';
import { Storage } from './providers/storage/storage';

const services = [User];
const providers = [Storage, Uuid];

@NgModule({
  declarations: [InputComponent, CardComponent,SelectComponent, ButtonComponent],
  imports: [CommonModule,IonicModule,ReactiveFormsModule,FormsModule],
  exports: [InputComponent, CardComponent, SelectComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  providers: [...services, ...providers],
})
export class SharedModule { }

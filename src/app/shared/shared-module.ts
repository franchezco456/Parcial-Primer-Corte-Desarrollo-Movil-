import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputComponent, CardComponent,SelectComponent, ButtonComponent],
  imports: [CommonModule,IonicModule,ReactiveFormsModule,FormsModule],
  exports: [InputComponent, CardComponent, SelectComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
})
export class SharedModule { }

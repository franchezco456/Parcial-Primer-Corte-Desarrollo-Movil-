import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [InputComponent, CardComponent,SelectComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [InputComponent, CardComponent, SelectComponent],
})
export class SharedModule { }

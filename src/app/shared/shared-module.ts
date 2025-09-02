import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [InputComponent, CardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [InputComponent, CardComponent],
})
export class SharedModule { }

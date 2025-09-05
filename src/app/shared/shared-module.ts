import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { Toast } from './providers/toast/toast';

@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [
    InputComponent,
    CardComponent,
    SelectComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    LinkComponent,
  ],
  providers: [Toast],
})
export class SharedModule {}

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
import { AppRoutingModule } from "src/app/app-routing.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    SidebarComponent
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
    SidebarComponent
  ],
  providers: [Toast],
})
export class SharedModule {}

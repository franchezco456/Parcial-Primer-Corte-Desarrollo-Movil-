import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Data_Country } from 'src/app/pages/interfaces/Icountries';
import { IData } from 'src/app/pages/interfaces/IData';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent<T extends IData<unknown>>  implements OnInit {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() contenido: string = '';
  @Input() multiple: boolean = false || true;
  @Input() options: T[] = [];
  @Input() control: FormControl = new FormControl();
  @Output() doSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  
  public select(event : any){
    this.doSelect.emit(event.detail.value);
  }
}

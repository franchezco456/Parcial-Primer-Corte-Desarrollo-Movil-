import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {
  @Input() label: string = '';
  @Input() multiple: boolean = false || true;
  @Input() options: string[] = [];
  @Input() control: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {}
  
  public doSelect(event : any){
    console.log(event.detail.value);
    this.control.setValue(event.detail.value);
  }
}

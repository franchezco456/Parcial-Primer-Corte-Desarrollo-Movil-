import { Component, OnInit,Input } from '@angular/core';

type InputType = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent  implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: InputType = 'text';
  constructor() { }

  ngOnInit() {}

}

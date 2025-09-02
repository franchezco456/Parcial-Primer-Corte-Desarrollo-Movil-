import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}

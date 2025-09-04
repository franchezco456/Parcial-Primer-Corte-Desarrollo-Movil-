import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: false,
})
export class LinkComponent  implements OnInit {
  @Input() component: string = '';
  @Input() url: string = '';
  constructor() { }

  ngOnInit() {}

}

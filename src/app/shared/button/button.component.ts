import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]', //host
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}

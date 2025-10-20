import { Component } from '@angular/core';
import { Council } from '../council/council.component';
@Component({
  selector: 'app-contact',
  imports: [Council],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class Contact {}

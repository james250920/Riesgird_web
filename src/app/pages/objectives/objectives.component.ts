import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIES_INFO } from '../../data';
import {EventsComponent} from '../event/events.component';
import { Council } from '../council/council.component';

@Component({
  selector: 'app-objectives',
  imports: [CommonModule, EventsComponent, Council],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.scss',
})
export class Objectives {
  objetivos = RIES_INFO.objetivos;

  trackByIndex(index: number): number {
    return index;
  }
}

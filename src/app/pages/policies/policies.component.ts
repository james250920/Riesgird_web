import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIES_INFO } from '../../data';
import { Council } from '../council/council.component';

@Component({
  selector: 'app-policies',
  imports: [CommonModule,Council],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.scss',
})
export class Policies {
  lineamientos = RIES_INFO.lineamientos;

  trackByIndex(index: number): number {
    return index;
  }
}

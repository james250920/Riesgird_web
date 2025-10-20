import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIES_INFO } from '../../data';
import { Council } from '../council/council.component';

@Component({
  selector: 'app-universities',
  imports: [CommonModule,Council],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class Universities {
  universidades = RIES_INFO.universidades;

  trackByIndex(index: number): number {
    return index;
  }
}

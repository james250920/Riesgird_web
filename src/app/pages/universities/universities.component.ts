import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIES_INFO } from '../../data';

@Component({
  selector: 'app-universities',
  imports: [CommonModule],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class Universities {
  universidades = RIES_INFO.universidades;

  trackByIndex(index: number): number {
    return index;
  }
}

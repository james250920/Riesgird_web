import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Council } from '../council/council.component';
import { EventsComponent } from '../event/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, Council, EventsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Home {}

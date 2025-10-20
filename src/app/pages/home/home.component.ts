import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Council } from '../council/council.component';
import { EventsComponent } from '../event/events.component';
import { Objectives } from '../objectives/objectives.component';
import { Universities } from '../universities/universities.component';
import { Policies } from '../policies/policies.component';
import { Contact } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule, 
    CommonModule, 
    Council, 
    EventsComponent,
    Objectives,
    Universities,
    Policies,
    Contact
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Home {}

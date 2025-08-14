import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Council } from './pages/council/council.component';
import { Objectives } from './pages/objectives/objectives.component';
import { Policies } from './pages/policies/policies.component';
import { Universities } from './pages/universities/universities.component';
import { Contact} from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: Home, title: 'RiesGIRD-ACC / Perú' },
  { path: 'consejo', component: Council, title: 'Consejo Directivo' },
  { path: 'objetivos', component: Objectives, title: 'Objetivos' },
  { path: 'lineamientos', component: Policies, title: 'Lineamientos' },
  { path: 'universidades', component: Universities, title: 'Universidades' },
  { path: 'contacto', component: Contact, title: 'Contacto' },
  { path: '**', redirectTo: '' },
];

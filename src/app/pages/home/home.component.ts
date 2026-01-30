import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Secciones
import { HeroSectionComponent } from './sections/hero-section.component';
import { SobreNosotrosComponent } from './sections/sobre-nosotros.component';
import { EstructuraComponent } from './sections/estructura.component';
import { DirectorioComponent } from './sections/directorio.component';
import { AliadosComponent } from './sections/aliados.component';
import { MembresiaComponent } from './sections/membresia.component';
import { AsambleasComponent } from './sections/asambleas.component';
import { PlanTrabajoComponent } from './sections/plan-trabajo.component';
import { MemoriasComponent } from './sections/memorias.component';
import { ContactoComponent } from './sections/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    SobreNosotrosComponent,
    EstructuraComponent,
    DirectorioComponent,
    AliadosComponent,
    MembresiaComponent,
    AsambleasComponent,
    PlanTrabajoComponent,
    MemoriasComponent,
    ContactoComponent
  ],
  template: `
    <main class="overflow-hidden">
      <app-hero-section></app-hero-section>
      <app-sobre-nosotros id="sobre-nosotros"></app-sobre-nosotros>
      <app-estructura id="estructura"></app-estructura>
      <app-directorio id="directorio"></app-directorio>
      <app-aliados id="aliados"></app-aliados>
      <app-membresia id="membresia"></app-membresia>
      <app-asambleas id="asambleas"></app-asambleas>
      <app-plan-trabajo id="plan-trabajo"></app-plan-trabajo>
      <app-memorias id="memorias"></app-memorias>
      <app-contacto id="contacto"></app-contacto>
    </main>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class Home {}

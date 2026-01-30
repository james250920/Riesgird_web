import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UNIVERSIDADES_MIEMBRO, UniversidadMiembro, PersonaContacto } from '../../../data/riesgird-data';

@Component({
  selector: 'app-directorio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
            Directorio
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Universidades <span class="text-sky-600">Miembro</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los representantes de las universidades que conforman nuestra red.
          </p>
        </div>

        <!-- University Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          @for (uni of universidades; track uni.id) {
            <button
              (click)="selectUniversidad(uni)"
              [class]="selectedUniversidad()?.id === uni.id ?
                'px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold shadow-lg scale-105' :
                'px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors'"
              class="transition-all duration-300">
              {{ uni.id.toUpperCase() }}
            </button>
          }
        </div>

        <!-- Selected University Details -->
        @if (selectedUniversidad(); as uni) {
          <div class="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 border border-sky-100 shadow-xl animate-fade-in">
            <!-- University Header -->
            <div class="flex flex-col md:flex-row items-center gap-6 mb-10 pb-8 border-b border-sky-100">
              <div class="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
                <svg class="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <div class="text-center md:text-left">
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ uni.nombre }}</h3>
                <div class="flex flex-wrap justify-center md:justify-start gap-3">
                  @if (uni.resolucionSecretario) {
                    <span class="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                      {{ uni.resolucionSecretario }}
                    </span>
                  }
                  @if (uni.resolucionComite) {
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                      {{ uni.resolucionComite }}
                    </span>
                  }
                </div>
              </div>
            </div>

            <!-- Main Representatives Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <ng-container *ngTemplateOutlet="personCard; context: { $implicit: uni.rector, highlight: true }"></ng-container>
              <ng-container *ngTemplateOutlet="personCard; context: { $implicit: uni.secretarioTecnico, highlight: true }"></ng-container>
              <ng-container *ngTemplateOutlet="personCard; context: { $implicit: uni.vicerrectorAcademico }"></ng-container>
              <ng-container *ngTemplateOutlet="personCard; context: { $implicit: uni.vicerrectorInvestigacion }"></ng-container>
              <ng-container *ngTemplateOutlet="personCard; context: { $implicit: uni.directorAdministracion }"></ng-container>
              <ng-container *ngTemplateOutlet="personCard; context: { $implicit: uni.secretariaRectorado }"></ng-container>
            </div>

            <!-- Comité Técnico -->
            <div class="bg-white rounded-2xl p-6 border border-gray-100">
              <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Comité Técnico Interáreas
              </h4>
              <div class="grid md:grid-cols-2 gap-4">
                @for (miembro of uni.comiteTecnico; track miembro.correo) {
                  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors group">
                    <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {{ getInitials(miembro.nombre) }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-semibold text-gray-900 truncate">{{ miembro.nombre }}</p>
                      <p class="text-sm text-sky-600">{{ miembro.cargo }}</p>
                      <p class="text-sm text-gray-500 truncate">{{ miembro.correo }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        }

        <!-- Person Card Template -->
        <ng-template #personCard let-persona let-highlight="highlight">
          <div [class]="highlight ?
            'bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1' :
            'bg-white rounded-2xl p-6 border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all hover:-translate-y-1'"
            class="group">
            <div class="flex items-start gap-4">
              <div [class]="highlight ?
                'w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold' :
                'w-16 h-16 bg-gradient-to-br from-sky-100 to-emerald-100 rounded-xl flex items-center justify-center'"
                class="flex-shrink-0 group-hover:scale-110 transition-transform">
                @if (highlight) {
                  <span class="text-white">{{ getInitials(persona.nombre) }}</span>
                } @else {
                  <span class="text-sky-600 font-bold text-lg">{{ getInitials(persona.nombre) }}</span>
                }
              </div>
              <div class="flex-1 min-w-0">
                <p [class]="highlight ? 'font-bold text-white' : 'font-bold text-gray-900'" class="mb-1 truncate">
                  {{ persona.nombre }}
                </p>
                <p [class]="highlight ? 'text-sky-100 text-sm mb-3' : 'text-sky-600 text-sm mb-3'">
                  {{ persona.cargo }}
                </p>
                <div class="space-y-1">
                  <a [href]="'mailto:' + persona.correo"
                     [class]="highlight ? 'flex items-center gap-2 text-sky-100 hover:text-white text-sm' : 'flex items-center gap-2 text-gray-600 hover:text-sky-600 text-sm'"
                     class="transition-colors truncate">
                    <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span class="truncate">{{ persona.correo }}</span>
                  </a>
                  <a [href]="'tel:' + persona.telefono"
                     [class]="highlight ? 'flex items-center gap-2 text-sky-100 hover:text-white text-sm' : 'flex items-center gap-2 text-gray-600 hover:text-sky-600 text-sm'"
                     class="transition-colors">
                    <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    {{ persona.telefono }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .animate-fade-in {
      animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class DirectorioComponent {
  universidades = UNIVERSIDADES_MIEMBRO;
  selectedUniversidad = signal<UniversidadMiembro | null>(UNIVERSIDADES_MIEMBRO[0]);

  selectUniversidad(uni: UniversidadMiembro) {
    this.selectedUniversidad.set(uni);
  }

  getInitials(nombre: string): string {
    return nombre
      .split(' ')
      .filter(word => word.length > 2)
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }
}

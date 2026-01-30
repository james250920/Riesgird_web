import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALIADOS_ESTRATEGICOS, AliadoEstrategico } from '../../../data/riesgird-data';

@Component({
  selector: 'app-aliados',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Alianzas
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Aliados <span class="text-amber-600">Estratégicos</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos de la mano con instituciones gubernamentales, cooperación internacional y sector privado.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            (click)="filterAliados('todos')"
            [class]="activeFilter() === 'todos' ?
              'px-6 py-3 bg-gray-900 text-white rounded-full font-semibold shadow-lg' :
              'px-6 py-3 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200'">
            Todos
          </button>
          @for (filter of filters; track filter.key) {
            <button
              (click)="filterAliados(filter.key)"
              [class]="activeFilter() === filter.key ?
                filter.activeClass :
                'px-6 py-3 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200'"
              class="transition-all duration-300">
              {{ filter.label }}
            </button>
          }
        </div>

        <!-- Aliados Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (aliado of filteredAliados(); track aliado.id; let i = $index) {
            <div class="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                 [style.animation-delay]="i * 0.05 + 's'">
              <!-- Decorative Element -->
              <div class="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   [ngClass]="{
                     'bg-gradient-to-br from-blue-100 to-transparent': aliado.tipo === 'cip',
                     'bg-gradient-to-br from-purple-100 to-transparent': aliado.tipo === 'cooperacion',
                     'bg-gradient-to-br from-green-100 to-transparent': aliado.tipo === 'gobierno',
                     'bg-gradient-to-br from-orange-100 to-transparent': aliado.tipo === 'empresa'
                   }"
                   style="border-radius: 0 0 0 100%;"></div>

              <div class="relative z-10">
                <!-- Logo & Type Badge -->
                <div class="flex items-start justify-between mb-4">
                  <div class="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                    @switch (aliado.tipo) {
                      @case ('cip') {
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      }
                      @case ('cooperacion') {
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                      }
                      @case ('gobierno') {
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                        </svg>
                      }
                      @case ('empresa') {
                        <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      }
                    }
                  </div>
                  <span [ngClass]="{
                    'bg-blue-100 text-blue-700': aliado.tipo === 'cip',
                    'bg-purple-100 text-purple-700': aliado.tipo === 'cooperacion',
                    'bg-green-100 text-green-700': aliado.tipo === 'gobierno',
                    'bg-orange-100 text-orange-700': aliado.tipo === 'empresa'
                  }" class="px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {{ getTypeLabelByType(aliado.tipo) }}
                  </span>
                </div>

                <!-- Content -->
                <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {{ aliado.nombre }}
                </h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ aliado.descripcion }}</p>

                <!-- Contact Info -->
                <div class="space-y-2 pt-4 border-t border-gray-100">
                  @if (aliado.contacto.web) {
                    <a [href]="aliado.contacto.web" target="_blank" rel="noopener noreferrer"
                       class="flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                      <span class="truncate">Sitio Web</span>
                      <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  }
                  @if (aliado.contacto.correo) {
                    <a [href]="'mailto:' + aliado.contacto.correo"
                       class="flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate">{{ aliado.contacto.correo }}</span>
                    </a>
                  }
                  @if (aliado.contacto.telefono) {
                    <a [href]="'tel:' + aliado.contacto.telefono"
                       class="flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      {{ aliado.contacto.telefono }}
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class AliadosComponent {
  aliados = ALIADOS_ESTRATEGICOS;
  activeFilter = signal<string>('todos');

  filters = [
    { key: 'cip', label: 'CIP', activeClass: 'px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg' },
    { key: 'cooperacion', label: 'Cooperación', activeClass: 'px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg' },
    { key: 'gobierno', label: 'Gobierno', activeClass: 'px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg' },
    { key: 'empresa', label: 'Empresas', activeClass: 'px-6 py-3 bg-orange-600 text-white rounded-full font-semibold shadow-lg' }
  ];

  filteredAliados = signal<AliadoEstrategico[]>(ALIADOS_ESTRATEGICOS);

  filterAliados(tipo: string) {
    this.activeFilter.set(tipo);
    if (tipo === 'todos') {
      this.filteredAliados.set(this.aliados);
    } else {
      this.filteredAliados.set(this.aliados.filter(a => a.tipo === tipo));
    }
  }

  getTypeLabelByType(tipo: string): string {
    const labels: Record<string, string> = {
      'cip': 'CIP',
      'cooperacion': 'Cooperación',
      'gobierno': 'Gobierno',
      'empresa': 'Empresa'
    };
    return labels[tipo] || tipo;
  }
}

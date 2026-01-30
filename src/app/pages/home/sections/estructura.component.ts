import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ESTRUCTURA_ORGANIZACION, ESTATUTO } from '../../../data/riesgird-data';

@Component({
  selector: 'app-estructura',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Organización
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Estructura y <span class="text-emerald-600">Organización</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ estructura.descripcion }}
          </p>
        </div>

        <!-- Organization Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          @for (organo of estructura.organos; track organo.nombre; let i = $index) {
            <div class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2 cursor-pointer"
                 [style.animation-delay]="i * 0.1 + 's'">
              <div class="flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  @switch (organo.icono) {
                    @case ('groups') {
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    }
                    @case ('account_balance') {
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                      </svg>
                    }
                    @case ('support_agent') {
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    }
                    @default {
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    }
                  }
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{{ organo.nombre }}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{{ organo.descripcion }}</p>
              </div>
            </div>
          }
        </div>

        <!-- Estatuto Section -->
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ estatuto.titulo }}</h3>
              <p class="text-gray-600 mb-4">
                Aprobado el <span class="font-semibold text-emerald-600">{{ estatuto.fechaAprobacion }}</span>
              </p>
              <p class="text-gray-700 mb-6">
                El estatuto define la estructura, funcionamiento y normativa de la RiesGIRD-ACC Perú,
                estableciendo los derechos y obligaciones de las universidades miembro.
              </p>
              <a href="#" class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Descargar Estatuto
              </a>
            </div>
            <div>
              <div class="bg-gray-50 rounded-2xl p-6">
                <h4 class="font-bold text-gray-900 mb-4">Contenido del Estatuto</h4>
                <div class="space-y-3">
                  @for (capitulo of estatuto.capitulos; track capitulo.numero) {
                    <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer group">
                      <span class="flex-shrink-0 w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        {{ capitulo.numero }}
                      </span>
                      <div>
                        <p class="font-medium text-gray-900">{{ capitulo.titulo }}</p>
                        <p class="text-sm text-gray-500">{{ capitulo.articulos }} artículos</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class EstructuraComponent {
  estructura = ESTRUCTURA_ORGANIZACION;
  estatuto = ESTATUTO;
}

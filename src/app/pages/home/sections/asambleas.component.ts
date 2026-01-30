import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ASAMBLEAS, Asamblea } from '../../../data/riesgird-data';

@Component({
  selector: 'app-asambleas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            Órgano Máximo
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Asambleas de <span class="text-rose-600">Rectores</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Las asambleas de rectores son el máximo órgano de gobierno de la red, donde se toman las decisiones estratégicas.
          </p>
        </div>

        <!-- Year Tabs -->
        <div class="flex justify-center gap-4 mb-12">
          @for (asamblea of asambleas; track asamblea.anio) {
            <button
              (click)="selectAsamblea(asamblea)"
              [class]="selectedAsamblea()?.anio === asamblea.anio ?
                'px-8 py-4 bg-rose-600 text-white rounded-2xl font-bold text-lg shadow-xl scale-105' :
                'px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all border border-gray-200 hover:border-rose-200'"
              class="transition-all duration-300">
              {{ asamblea.anio }}
            </button>
          }
        </div>

        <!-- Selected Assembly Content -->
        @if (selectedAsamblea(); as asamblea) {
          <div class="animate-fade-in">
            <!-- Assembly Header Card -->
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-8">
              <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ asamblea.numero }}</h3>
                  <div class="flex flex-wrap items-center gap-4 text-gray-600">
                    <span class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ asamblea.fecha }}
                    </span>
                    <span class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ asamblea.lugar }}
                    </span>
                  </div>
                </div>
                @if (asamblea.acuerdos.length === 0) {
                  <span class="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-semibold">
                    📅 Programada
                  </span>
                }
              </div>

              <!-- Tabs for Agenda/Acuerdos/Fotos -->
              <div class="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">
                <button
                  (click)="activeTab.set('agenda')"
                  [class]="activeTab() === 'agenda' ?
                    'px-4 py-2 bg-rose-100 text-rose-700 rounded-lg font-semibold' :
                    'px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium'"
                  class="transition-colors">
                  Agenda
                </button>
                @if (asamblea.acuerdos.length > 0) {
                  <button
                    (click)="activeTab.set('acuerdos')"
                    [class]="activeTab() === 'acuerdos' ?
                      'px-4 py-2 bg-rose-100 text-rose-700 rounded-lg font-semibold' :
                      'px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium'"
                    class="transition-colors">
                    Acuerdos
                  </button>
                }
                @if (asamblea.fotos.length > 0) {
                  <button
                    (click)="activeTab.set('fotos')"
                    [class]="activeTab() === 'fotos' ?
                      'px-4 py-2 bg-rose-100 text-rose-700 rounded-lg font-semibold' :
                      'px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium'"
                    class="transition-colors">
                    Fotos
                  </button>
                }
                @if (asamblea.documentos.length > 0) {
                  <button
                    (click)="activeTab.set('documentos')"
                    [class]="activeTab() === 'documentos' ?
                      'px-4 py-2 bg-rose-100 text-rose-700 rounded-lg font-semibold' :
                      'px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium'"
                    class="transition-colors">
                    Documentos
                  </button>
                }
              </div>

              <!-- Tab Content -->
              <div class="min-h-[300px]">
                @switch (activeTab()) {
                  @case ('agenda') {
                    <div class="grid md:grid-cols-2 gap-4 animate-fade-in">
                      @for (item of asamblea.agenda; track item; let i = $index) {
                        <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors group">
                          <span class="flex-shrink-0 w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-bold group-hover:bg-rose-500 group-hover:text-white transition-colors">
                            {{ i + 1 }}
                          </span>
                          <p class="text-gray-700 pt-2">{{ item }}</p>
                        </div>
                      }
                    </div>
                  }
                  @case ('acuerdos') {
                    <div class="space-y-3 animate-fade-in">
                      @for (acuerdo of asamblea.acuerdos; track acuerdo) {
                        <div class="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
                          <svg class="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <p class="text-gray-700">{{ acuerdo }}</p>
                        </div>
                      }
                    </div>
                  }
                  @case ('fotos') {
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
                      @for (foto of asamblea.fotos; track foto; let i = $index) {
                        <div class="aspect-video bg-gradient-to-br from-rose-200 to-pink-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all relative">
                          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                            <span class="text-white font-medium">Foto {{ i + 1 }}</span>
                          </div>
                          <div class="w-full h-full flex items-center justify-center">
                            <span class="text-4xl group-hover:scale-125 transition-transform">📷</span>
                          </div>
                        </div>
                      }
                    </div>
                  }
                  @case ('documentos') {
                    <div class="grid md:grid-cols-2 gap-4 animate-fade-in">
                      @for (doc of asamblea.documentos; track doc.titulo) {
                        <a href="#" class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group">
                          <div class="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                            <svg class="w-7 h-7 text-rose-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                            </svg>
                          </div>
                          <div class="flex-1">
                            <h4 class="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">{{ doc.titulo }}</h4>
                            <p class="text-sm text-gray-500">Descargar PDF</p>
                          </div>
                          <svg class="w-5 h-5 text-gray-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                          </svg>
                        </a>
                      }
                    </div>
                  }
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .animate-fade-in {
      animation: fadeIn 0.4s ease-out;
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
export class AsambleasComponent {
  asambleas = ASAMBLEAS;
  selectedAsamblea = signal<Asamblea | null>(ASAMBLEAS[0]);
  activeTab = signal<'agenda' | 'acuerdos' | 'fotos' | 'documentos'>('agenda');

  selectAsamblea(asamblea: Asamblea) {
    this.selectedAsamblea.set(asamblea);
    this.activeTab.set('agenda');
  }
}

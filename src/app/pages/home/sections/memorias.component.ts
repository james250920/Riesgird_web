import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MEMORIAS_GESTION,
  CONGRESOS_INTERNACIONALES,
  ALBUM_FOTOGRAFICO,
  MemoriaGestion,
  CongresoInternacional
} from '../../../data/riesgird-data';

@Component({
  selector: 'app-memorias',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Documentación
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Memorias de <span class="text-indigo-600">Gestión</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce los logros, actividades y resultados de nuestra gestión institucional.
          </p>
        </div>

        <!-- Tabs -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            (click)="activeSection.set('memoria')"
            [class]="activeSection() === 'memoria' ?
              'px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg' :
              'px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 border border-gray-200'"
            class="transition-all duration-300">
            📊 Memoria 2024-2025
          </button>
          <button
            (click)="activeSection.set('congresos')"
            [class]="activeSection() === 'congresos' ?
              'px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg' :
              'px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 border border-gray-200'"
            class="transition-all duration-300">
            🎓 Congresos Internacionales
          </button>
          <button
            (click)="activeSection.set('album')"
            [class]="activeSection() === 'album' ?
              'px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg' :
              'px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 border border-gray-200'"
            class="transition-all duration-300">
            📸 Álbum Fotográfico
          </button>
        </div>

        <!-- Content -->
        <div class="animate-fade-in">
          @switch (activeSection()) {
            <!-- Memoria de Gestión -->
            @case ('memoria') {
              @if (memorias[0]; as memoria) {
                <div class="space-y-8">
                  <!-- Header Card -->
                  <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="relative z-10">
                      <h3 class="text-2xl md:text-3xl font-bold mb-4">{{ memoria.titulo }}</h3>
                      <p class="text-indigo-100 mb-6 max-w-2xl">{{ memoria.descripcion }}</p>
                      @if (memoria.documentoMemoria) {
                        <a href="#" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition-colors shadow-lg">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                          </svg>
                          Descargar Memoria Completa
                        </a>
                      }
                    </div>
                  </div>

                  <!-- Stats Grid -->
                  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    @for (cifra of memoria.cifras; track cifra.label) {
                      <div class="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                        <p class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{{ cifra.valor }}</p>
                        <p class="text-gray-600 text-sm">{{ cifra.label }}</p>
                      </div>
                    }
                  </div>

                  <!-- Logros -->
                  <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                      </span>
                      Principales Logros
                    </h4>
                    <div class="grid md:grid-cols-2 gap-4">
                      @for (logro of memoria.logros; track logro) {
                        <div class="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                          <svg class="w-6 h-6 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span class="text-gray-700">{{ logro }}</span>
                        </div>
                      }
                    </div>
                  </div>

                  <!-- Actividades Timeline -->
                  <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </span>
                      Actividades Desarrolladas
                    </h4>
                    <div class="space-y-6">
                      @for (actividad of memoria.actividades; track actividad.titulo; let last = $last) {
                        <div class="relative pl-8 pb-6" [class.border-l-2]="!last" [class.border-indigo-200]="!last">
                          <div class="absolute left-0 top-0 w-4 h-4 bg-indigo-600 rounded-full -translate-x-1/2"></div>
                          <div class="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                            <div class="flex flex-wrap items-center gap-3 mb-2">
                              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                {{ actividad.fecha }}
                              </span>
                              <span class="text-gray-500 text-sm">
                                {{ actividad.participantes }} participantes
                              </span>
                            </div>
                            <h5 class="font-bold text-gray-900 mb-2">{{ actividad.titulo }}</h5>
                            <p class="text-gray-600 text-sm">{{ actividad.descripcion }}</p>
                          </div>
                        </div>
                      }
                    </div>
                  </div>

                  <!-- Memoria 2026-2027 Placeholder -->
                  <div class="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-8 text-center border-2 border-dashed border-gray-300">
                    <span class="text-5xl mb-4 block">📝</span>
                    <h4 class="text-xl font-bold text-gray-700 mb-2">Memoria 2026-2027</h4>
                    <p class="text-gray-500">En construcción - Se actualizará al finalizar el período</p>
                  </div>
                </div>
              }
            }

            <!-- Congresos -->
            @case ('congresos') {
              <div class="space-y-8">
                <div class="text-center mb-8">
                  <p class="text-gray-600">Publicación integrada de los congresos internacionales realizados por la red.</p>
                </div>

                @for (congreso of congresos; track congreso.edicion) {
                  <div class="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                    <div class="grid lg:grid-cols-2">
                      <!-- Image Side -->
                      <div class="h-64 lg:h-auto bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden flex items-center justify-center">
                        <span class="text-9xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">🎓</span>
                        <div class="absolute top-4 left-4">
                          <span class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl font-bold text-indigo-700">
                            {{ congreso.edicion }} Congreso
                          </span>
                        </div>
                      </div>

                      <!-- Content Side -->
                      <div class="p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ congreso.tema }}</h3>
                        <div class="flex flex-wrap gap-4 mb-4 text-gray-600">
                          <span class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            {{ congreso.fecha }}
                          </span>
                          <span class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            </svg>
                            {{ congreso.lugar }}
                          </span>
                        </div>
                        <p class="text-gray-600 mb-6">{{ congreso.resumen }}</p>

                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-4 mb-6">
                          <div class="text-center p-3 bg-indigo-50 rounded-xl">
                            <p class="text-2xl font-bold text-indigo-600">{{ congreso.participantes }}</p>
                            <p class="text-xs text-gray-500">Participantes</p>
                          </div>
                          <div class="text-center p-3 bg-purple-50 rounded-xl">
                            <p class="text-2xl font-bold text-purple-600">{{ congreso.ponencias }}</p>
                            <p class="text-xs text-gray-500">Ponencias</p>
                          </div>
                          <div class="text-center p-3 bg-pink-50 rounded-xl">
                            <p class="text-2xl font-bold text-pink-600">{{ congreso.paises }}</p>
                            <p class="text-xs text-gray-500">Países</p>
                          </div>
                        </div>

                        @if (congreso.publicacion) {
                          <a href="#" class="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                            Ver Libro de Ponencias
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>
            }

            <!-- Álbum Fotográfico -->
            @case ('album') {
              <div>
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ album.titulo }}</h3>
                  <p class="text-gray-600">{{ album.descripcion }}</p>
                </div>

                @for (categoria of album.categorias; track categoria.nombre) {
                  <div class="mb-12">
                    <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span class="w-2 h-8 bg-indigo-500 rounded-full"></span>
                      {{ categoria.nombre }}
                    </h4>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                      @for (foto of categoria.fotos; track foto.src) {
                        <div class="group relative aspect-video bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all">
                          <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-5xl group-hover:scale-125 transition-transform duration-500">📷</span>
                          </div>
                          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span class="text-white font-medium">{{ foto.caption }}</span>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          }
        </div>
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
export class MemoriasComponent {
  memorias = MEMORIAS_GESTION;
  congresos = CONGRESOS_INTERNACIONALES;
  album = ALBUM_FOTOGRAFICO;

  activeSection = signal<'memoria' | 'congresos' | 'album'>('memoria');
}

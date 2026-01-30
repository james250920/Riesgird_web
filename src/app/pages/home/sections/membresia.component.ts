import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROCESO_MEMBRESIA, REQUISITOS_MEMBRESIA, MODELOS_DOCUMENTOS } from '../../../data/riesgird-data';

@Component({
  selector: 'app-membresia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
            Únete a la Red
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Proceso de <span class="text-violet-600">Membresía</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ procesoMembresia.descripcion }}
          </p>
        </div>

        <!-- Process Timeline -->
        <div class="mb-20">
          <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Fases del Proceso</h3>
          <div class="relative">
            <!-- Timeline Line (hidden on mobile) -->
            <div class="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200"></div>

            <!-- Timeline Steps -->
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              @for (fase of procesoMembresia.fases; track fase.numero; let i = $index) {
                <div class="relative group" [style.animation-delay]="i * 0.15 + 's'">
                  <!-- Connector for mobile -->
                  @if (i < procesoMembresia.fases.length - 1) {
                    <div class="lg:hidden absolute left-8 top-20 w-0.5 h-full bg-violet-200"></div>
                  }

                  <div class="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-violet-300 hover:shadow-xl transition-all duration-500 relative z-10 group-hover:-translate-y-2">
                    <!-- Step Number -->
                    <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {{ fase.numero }}
                    </div>

                    <!-- Icon -->
                    <div class="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                      @switch (fase.icono) {
                        @case ('mail') {
                          <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        }
                        @case ('checklist') {
                          <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                          </svg>
                        }
                        @case ('people') {
                          <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                          </svg>
                        }
                        @case ('how_to_vote') {
                          <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        }
                        @case ('verified') {
                          <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                          </svg>
                        }
                      }
                    </div>

                    <h4 class="text-lg font-bold text-gray-900 mb-2 text-center">{{ fase.titulo }}</h4>
                    <p class="text-gray-600 text-sm text-center mb-3">{{ fase.descripcion }}</p>
                    <p class="text-violet-600 text-sm font-semibold text-center">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {{ fase.duracion }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Requirements & Documents Grid -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Requirements -->
          <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              Requisitos
            </h3>
            <ul class="space-y-4">
              @for (requisito of requisitos; track requisito; let i = $index) {
                <li class="flex items-start gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <span class="flex-shrink-0 w-8 h-8 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center font-bold text-sm">
                    {{ i + 1 }}
                  </span>
                  <span class="text-gray-700">{{ requisito }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- Documents -->
          <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              Modelos de Documentos
            </h3>
            <div class="space-y-4">
              @for (doc of documentos; track doc.titulo) {
                <a href="#"
                   class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:shadow-md transition-all group border border-transparent hover:border-emerald-200">
                  <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    @switch (doc.icono) {
                      @case ('description') {
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                      }
                      @case ('gavel') {
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                        </svg>
                      }
                      @case ('groups') {
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      }
                      @case ('workspace_premium') {
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                        </svg>
                      }
                    }
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{{ doc.titulo }}</h4>
                    <p class="text-sm text-gray-500">{{ doc.descripcion }}</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </a>
              }
            </div>
          </div>
        </div>

        <!-- Certificate Preview -->
        <div class="mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div class="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl md:text-3xl font-bold mb-4">Certificado de Membresía</h3>
              <p class="text-violet-100 mb-6 max-w-xl">
                Al completar el proceso de adscripción, tu universidad recibirá un certificado oficial que acredita su membresía en la RiesGIRD-ACC Perú.
              </p>
              <a href="#contacto" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-100 transition-colors shadow-lg">
                Solicitar Información
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
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
export class MembresiaComponent {
  procesoMembresia = PROCESO_MEMBRESIA;
  requisitos = REQUISITOS_MEMBRESIA;
  documentos = MODELOS_DOCUMENTOS;
}

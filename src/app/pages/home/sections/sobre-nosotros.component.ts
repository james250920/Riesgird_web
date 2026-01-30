import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INFO_RIESGIRD } from '../../../data/riesgird-data';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4 animate-on-scroll">
            ¿Quiénes Somos?
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Qué es la <span class="text-sky-600">RiesGIRD-ACC</span> Perú
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Una red de universidades comprometidas con la gestión del riesgo de desastres
            y la adaptación al cambio climático en la educación superior del Perú.
          </p>
        </div>

        <!-- Vision & Mission Cards -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- Vision -->
          <div class="group relative bg-gradient-to-br from-sky-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-sky-100 overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-sky-200/30 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative z-10">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-sky-500 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p class="text-gray-700 leading-relaxed">{{ info.vision }}</p>
            </div>
          </div>

          <!-- Mission -->
          <div class="group relative bg-gradient-to-br from-emerald-50 to-sky-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-emerald-100 overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-emerald-200/30 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative z-10">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p class="text-gray-700 leading-relaxed">{{ info.mision }}</p>
            </div>
          </div>
        </div>

        <!-- Objectives -->
        <div class="mb-16">
          <h3 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Nuestros Objetivos
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (objetivo of info.objetivos; track objetivo; let i = $index) {
              <div class="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start gap-4">
                  <span class="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-xl font-bold text-lg group-hover:scale-110 transition-transform">
                    {{ i + 1 }}
                  </span>
                  <p class="text-gray-700 leading-relaxed">{{ objetivo }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Lineamientos -->
        <div class="bg-gradient-to-r from-sky-900 to-emerald-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold text-center mb-10">
              Lineamientos Estratégicos
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              @for (lineamiento of info.lineamientos; track lineamiento) {
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                  <svg class="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sky-100">{{ lineamiento }}</span>
                </div>
              }
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
export class SobreNosotrosComponent {
  info = INFO_RIESGIRD;
}

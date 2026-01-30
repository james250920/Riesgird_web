import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  RED_INVESTIGADORES, 
  EXPERTOS_GOBERNANZA, 
  PROGRAMAS_ESPECIALIZACION,
  LABORATORIOS_TERRITORIALES,
  BRIGADAS,
  PLAN_2026,
  FORO_INTERUNIVERSITARIO,
  Investigador,
  EventoForo
} from '../../../data/riesgird-data';

@Component({
  selector: 'app-plan-trabajo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
            2024 - 2027
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Plan de <span class="text-cyan-600">Trabajo</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce nuestras líneas de acción, programas y actividades para el período 2024-2027.
          </p>
        </div>

        <!-- Tabs Navigation -->
        <div class="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 p-2 rounded-2xl max-w-4xl mx-auto">
          @for (tab of tabs; track tab.id) {
            <button
              (click)="activeTab.set(tab.id)"
              [class]="activeTab() === tab.id ? 
                'px-5 py-3 bg-white text-cyan-700 rounded-xl font-semibold shadow-md' : 
                'px-5 py-3 text-gray-600 rounded-xl font-medium hover:text-cyan-600'"
              class="transition-all duration-300 text-sm md:text-base">
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Tab Content -->
        <div class="animate-fade-in">
          @switch (activeTab()) {
            <!-- Investigadores -->
            @case ('investigadores') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Red de Investigadores</h3>
                  <p class="text-gray-600">Científicos y académicos especializados en GIRD-ACC</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  @for (investigador of investigadores; track investigador.orcid) {
                    <div class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all group">
                      <div class="flex items-start gap-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                          {{ getInitials(investigador.nombre) }}
                        </div>
                        <div class="flex-1 min-w-0">
                          <h4 class="font-bold text-gray-900 truncate">{{ investigador.nombre }}</h4>
                          <p class="text-cyan-600 text-sm">{{ investigador.universidad }}</p>
                        </div>
                      </div>
                      <div class="mt-4 pt-4 border-t border-gray-100">
                        <p class="text-gray-600 text-sm mb-3">{{ investigador.especialidad }}</p>
                        <div class="flex items-center justify-between">
                          <span class="text-xs text-gray-500">ORCID: {{ investigador.orcid }}</span>
                          <span class="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                            {{ investigador.publicaciones }} publicaciones
                          </span>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Expertos -->
            @case ('expertos') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Red de Expertos en Gobernanza</h3>
                  <p class="text-gray-600">Especialistas en políticas y gestión del riesgo</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                  @for (experto of expertos; track experto.correo) {
                    <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 hover:shadow-2xl transition-all group text-center">
                      <div class="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                        {{ getInitials(experto.nombre) }}
                      </div>
                      <h4 class="text-xl font-bold text-gray-900 mb-2">{{ experto.nombre }}</h4>
                      <p class="text-indigo-600 font-medium mb-4">{{ experto.universidad }}</p>
                      <p class="text-gray-600 text-sm mb-4">{{ experto.experiencia }}</p>
                      <a [href]="'mailto:' + experto.correo" class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        {{ experto.correo }}
                      </a>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Programas -->
            @case ('programas') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Programas de Especialización</h3>
                  <p class="text-gray-600">Formación académica ofrecida por las universidades miembro</p>
                </div>
                <div class="space-y-4">
                  @for (programa of programas; track programa.titulo) {
                    <div class="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group">
                      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div class="flex-1">
                          <div class="flex items-center gap-3 mb-2">
                            <h4 class="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                              {{ programa.titulo }}
                            </h4>
                            @switch (programa.estado) {
                              @case ('activo') {
                                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                  Activo
                                </span>
                              }
                              @case ('proximo') {
                                <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                  Próximamente
                                </span>
                              }
                              @case ('finalizado') {
                                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                                  Finalizado
                                </span>
                              }
                            }
                          </div>
                          <p class="text-cyan-600 font-medium text-sm mb-2">{{ programa.universidad }}</p>
                          <p class="text-gray-600 text-sm">{{ programa.descripcion }}</p>
                        </div>
                        <div class="flex flex-wrap gap-4 lg:flex-nowrap">
                          <div class="px-4 py-2 bg-gray-50 rounded-xl text-center min-w-[100px]">
                            <p class="text-xs text-gray-500">Modalidad</p>
                            <p class="font-semibold text-gray-900">{{ programa.modalidad }}</p>
                          </div>
                          <div class="px-4 py-2 bg-gray-50 rounded-xl text-center min-w-[100px]">
                            <p class="text-xs text-gray-500">Duración</p>
                            <p class="font-semibold text-gray-900">{{ programa.duracion }}</p>
                          </div>
                          <div class="px-4 py-2 bg-gray-50 rounded-xl text-center min-w-[100px]">
                            <p class="text-xs text-gray-500">Créditos</p>
                            <p class="font-semibold text-gray-900">{{ programa.creditos }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Laboratorios -->
            @case ('laboratorios') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Laboratorios Territoriales</h3>
                  <p class="text-gray-600">Espacios de investigación-acción en el territorio</p>
                </div>
                <div class="grid lg:grid-cols-3 gap-8">
                  @for (lab of laboratorios; track lab.nombre) {
                    <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                      <div class="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                        <span class="text-6xl group-hover:scale-125 transition-transform duration-500">🔬</span>
                        <div class="absolute bottom-4 left-4 right-4">
                          <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-teal-700">
                            {{ lab.universidad }}
                          </span>
                        </div>
                      </div>
                      <div class="p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-2">{{ lab.nombre }}</h4>
                        <p class="text-gray-500 text-sm mb-4 flex items-center gap-2">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          </svg>
                          {{ lab.ubicacion }}
                        </p>
                        <p class="text-gray-600 text-sm mb-4">{{ lab.descripcion }}</p>
                        <div>
                          <p class="text-xs font-semibold text-gray-500 uppercase mb-2">Proyectos:</p>
                          <div class="flex flex-wrap gap-2">
                            @for (proyecto of lab.proyectos; track proyecto) {
                              <span class="px-2 py-1 bg-teal-50 text-teal-700 rounded-lg text-xs">
                                {{ proyecto }}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Brigadas -->
            @case ('brigadas') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Brigadas y Voluntariados</h3>
                  <p class="text-gray-600">Equipos estudiantiles de respuesta ante emergencias</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  @for (brigada of brigadas; track brigada.nombre) {
                    <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:shadow-xl transition-all group">
                      <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <span class="text-3xl">🚑</span>
                      </div>
                      <h4 class="text-lg font-bold text-gray-900 mb-1">{{ brigada.nombre }}</h4>
                      <p class="text-orange-600 font-medium text-sm mb-3">{{ brigada.universidad }}</p>
                      <p class="text-gray-600 text-sm mb-4">{{ brigada.especialidad }}</p>
                      <div class="flex items-center justify-between pt-4 border-t border-orange-100">
                        <span class="text-sm text-gray-500">
                          <strong class="text-gray-900">{{ brigada.integrantes }}</strong> integrantes
                        </span>
                        <a [href]="'mailto:' + brigada.contacto" class="text-orange-600 hover:text-orange-800 transition-colors text-sm font-medium">
                          Contactar
                        </a>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Plan 2026 -->
            @case ('plan2026') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan2026.titulo }}</h3>
                  <p class="text-gray-600">Ejes estratégicos y actividades programadas</p>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                  @for (eje of plan2026.ejes; track eje.nombre; let i = $index) {
                    <div class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all">
                      <div class="flex items-center gap-4 mb-4">
                        <span class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {{ i + 1 }}
                        </span>
                        <h4 class="text-xl font-bold text-gray-900">{{ eje.nombre }}</h4>
                      </div>
                      <ul class="space-y-2">
                        @for (actividad of eje.actividades; track actividad) {
                          <li class="flex items-start gap-3 text-gray-600">
                            <svg class="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            {{ actividad }}
                          </li>
                        }
                      </ul>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Foro -->
            @case ('foro') {
              <div>
                <div class="text-center mb-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Foro Interuniversitario Abierto</h3>
                  <p class="text-gray-600">Calendario de eventos, convocatorias y reuniones</p>
                </div>
                <div class="space-y-4">
                  @for (evento of foro; track evento.id) {
                    <div class="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all flex flex-col md:flex-row gap-6"
                         [ngClass]="{
                           'border-l-4 border-l-blue-500': evento.tipo === 'webinar',
                           'border-l-4 border-l-green-500': evento.tipo === 'taller',
                           'border-l-4 border-l-purple-500': evento.tipo === 'conferencia',
                           'border-l-4 border-l-amber-500': evento.tipo === 'convocatoria',
                           'border-l-4 border-l-gray-500': evento.tipo === 'reunion'
                         }">
                      <div class="flex-shrink-0 text-center md:text-left">
                        <div class="w-16 h-16 bg-gray-100 rounded-xl flex flex-col items-center justify-center mx-auto md:mx-0">
                          <span class="text-xs text-gray-500 uppercase">{{ getMonth(evento.fecha) }}</span>
                          <span class="text-2xl font-bold text-gray-900">{{ getDay(evento.fecha) }}</span>
                        </div>
                      </div>
                      <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                          <span [ngClass]="{
                            'bg-blue-100 text-blue-700': evento.tipo === 'webinar',
                            'bg-green-100 text-green-700': evento.tipo === 'taller',
                            'bg-purple-100 text-purple-700': evento.tipo === 'conferencia',
                            'bg-amber-100 text-amber-700': evento.tipo === 'convocatoria',
                            'bg-gray-100 text-gray-700': evento.tipo === 'reunion'
                          }" class="px-2 py-1 rounded-full text-xs font-semibold uppercase">
                            {{ evento.tipo }}
                          </span>
                          <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            {{ evento.modalidad }}
                          </span>
                        </div>
                        <h4 class="text-lg font-bold text-gray-900 mb-2">{{ evento.titulo }}</h4>
                        <p class="text-gray-600 text-sm mb-3">{{ evento.descripcion }}</p>
                        @if (evento.ponentes && evento.ponentes.length > 0) {
                          <p class="text-sm text-gray-500">
                            <strong>Ponentes:</strong> {{ evento.ponentes.join(', ') }}
                          </p>
                        }
                      </div>
                      @if (evento.enlaceInscripcion) {
                        <div class="flex-shrink-0 flex items-center">
                          <a [href]="evento.enlaceInscripcion" target="_blank" 
                             class="px-5 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                            Inscribirse
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                          </a>
                        </div>
                      }
                    </div>
                  }
                </div>
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
export class PlanTrabajoComponent {
  investigadores = RED_INVESTIGADORES;
  expertos = EXPERTOS_GOBERNANZA;
  programas = PROGRAMAS_ESPECIALIZACION;
  laboratorios = LABORATORIOS_TERRITORIALES;
  brigadas = BRIGADAS;
  plan2026 = PLAN_2026;
  foro = FORO_INTERUNIVERSITARIO;

  activeTab = signal<string>('investigadores');

  tabs = [
    { id: 'investigadores', label: 'Investigadores' },
    { id: 'expertos', label: 'Expertos' },
    { id: 'programas', label: 'Programas' },
    { id: 'laboratorios', label: 'Laboratorios' },
    { id: 'brigadas', label: 'Brigadas' },
    { id: 'plan2026', label: 'Plan 2026' },
    { id: 'foro', label: 'Foro Abierto' }
  ];

  getInitials(nombre: string): string {
    return nombre
      .split(' ')
      .filter(word => word.length > 2)
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  getDay(fecha: string): string {
    return new Date(fecha).getDate().toString().padStart(2, '0');
  }

  getMonth(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-PE', { month: 'short' });
  }
}

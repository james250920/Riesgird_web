import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SECRETARIA_TECNICA } from '../../../data/riesgird-data';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
            Comunícate con nosotros
          </span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span class="text-sky-600">Contacto</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre la red? ¿Tu universidad desea formar parte? Estamos aquí para ayudarte.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Secretaría Técnica Card -->
            <div class="bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div class="relative z-10">
                <h3 class="text-2xl font-bold mb-6">Secretaría Técnica</h3>
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                    👩‍💼
                  </div>
                  <div>
                    <p class="text-xl font-semibold">{{ secretaria.nombre }}</p>
                    <p class="text-sky-100">{{ secretaria.cargo }}</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <a [href]="'mailto:' + secretaria.correo" class="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
                    <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    {{ secretaria.correo }}
                  </a>
                  <a [href]="'tel:' + secretaria.telefono" class="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
                    <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    {{ secretaria.telefono }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="grid grid-cols-2 gap-4">
              <a href="#membresia" class="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-violet-100 hover:border-violet-300">
                <div class="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span class="text-2xl">📋</span>
                </div>
                <h4 class="font-bold text-gray-900 mb-1">Proceso de Membresía</h4>
                <p class="text-sm text-gray-500">Cómo unirse a la red</p>
              </a>
              <a href="#" class="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-emerald-100 hover:border-emerald-300">
                <div class="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span class="text-2xl">📄</span>
                </div>
                <h4 class="font-bold text-gray-900 mb-1">Documentos</h4>
                <p class="text-sm text-gray-500">Formatos y modelos</p>
              </a>
            </div>

            <!-- Social & Map -->
            <div class="bg-gray-50 rounded-2xl p-6">
              <h4 class="font-bold text-gray-900 mb-4">Síguenos</h4>
              <div class="flex gap-3">
                <a href="#" class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <svg class="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <svg class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-3xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
            <form (ngSubmit)="onSubmit()" class="space-y-5">
              <div class="grid md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    [(ngModel)]="formData.nombre"
                    name="nombre"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    [(ngModel)]="formData.correo"
                    name="correo"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    placeholder="tu@correo.edu.pe">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Universidad / Institución</label>
                <input
                  type="text"
                  [(ngModel)]="formData.institucion"
                  name="institucion"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  placeholder="Nombre de tu universidad">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <select
                  [(ngModel)]="formData.asunto"
                  name="asunto"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white">
                  <option value="">Selecciona un asunto</option>
                  <option value="membresia">Solicitud de membresía</option>
                  <option value="informacion">Solicitud de información</option>
                  <option value="colaboracion">Propuesta de colaboración</option>
                  <option value="eventos">Información sobre eventos</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  [(ngModel)]="formData.mensaje"
                  name="mensaje"
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>
              <button
                type="submit"
                [disabled]="isSubmitting()"
                class="w-full py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                @if (isSubmitting()) {
                  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                } @else {
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Enviar mensaje
                }
              </button>
            </form>

            @if (showSuccess()) {
              <div class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 animate-fade-in">
                <svg class="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p class="font-semibold text-emerald-800">¡Mensaje enviado!</p>
                  <p class="text-sm text-emerald-600">Te responderemos a la brevedad posible.</p>
                </div>
              </div>
            }
          </div>
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
export class ContactoComponent {
  secretaria = SECRETARIA_TECNICA;

  formData = {
    nombre: '',
    correo: '',
    institucion: '',
    asunto: '',
    mensaje: ''
  };

  isSubmitting = signal(false);
  showSuccess = signal(false);

  onSubmit() {
    this.isSubmitting.set(true);

    // Simular envío
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.showSuccess.set(true);

      // Reset form
      this.formData = {
        nombre: '',
        correo: '',
        institucion: '',
        asunto: '',
        mensaje: ''
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess.set(false);
      }, 5000);
    }, 2000);
  }
}

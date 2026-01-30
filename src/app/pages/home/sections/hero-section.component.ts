import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INFO_RIESGIRD } from '../../../data/riesgird-data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-emerald-800">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/2 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute -bottom-40 right-1/4 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>

        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <!-- Logo Animation -->
        <div class="mb-8 animate-fade-in-down">
          <div class="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl mb-6 hover:scale-110 transition-transform duration-500">
            <span class="text-6xl">🌍</span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style="animation-delay: 0.2s;">
          <span class="bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
            RiesGIRD-ACC
          </span>
          <br>
          <span class="text-3xl md:text-4xl lg:text-5xl text-sky-200">Perú</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl lg:text-2xl text-sky-100/90 max-w-4xl mx-auto mb-8 animate-fade-in-up leading-relaxed" style="animation-delay: 0.4s;">
          {{ infoRiesgird.nombreCompleto }}
        </p>

        <!-- Stats Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-up" style="animation-delay: 0.6s;">
          @for (stat of stats(); track stat.label) {
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
              <div class="text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                {{ stat.value }}
              </div>
              <div class="text-sky-200 text-sm md:text-base mt-1">{{ stat.label }}</div>
            </div>
          }
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 0.8s;">
          <a href="#sobre-nosotros"
             class="group inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-900 font-semibold rounded-full hover:bg-sky-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span>Conoce la Red</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="#membresia"
             class="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300">
            <span>Únete a la Red</span>
            <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre-nosotros" class="flex flex-col items-center text-white/60 hover:text-white transition-colors">
            <span class="text-sm mb-2">Explorar</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Wave Decoration -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in-down {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-down {
      animation: fade-in-down 0.8s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
      opacity: 0;
    }
  `]
})
export class HeroSectionComponent implements OnInit {
  infoRiesgird = INFO_RIESGIRD;

  stats = signal([
    { value: '25+', label: 'Universidades' },
    { value: '45+', label: 'Investigadores' },
    { value: '1200+', label: 'Capacitados' },
    { value: '8', label: 'Convenios' }
  ]);

  ngOnInit() {}
}

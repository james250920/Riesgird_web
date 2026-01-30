import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar.component';
import { Footer } from './components/footer/footer.component';
import { AppStateService } from './shared/services/app-state.service';
import { SeoService } from './shared/services/seo.service';

/**
 * Componente raíz de la aplicación
 * Configura la estructura base y servicios globales
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  // Servicios inyectados
  private readonly appStateService = inject(AppStateService);
  private readonly seoService = inject(SeoService);

  // Estado de la aplicación
  protected readonly title = signal('RiesGIRD-ACC / Perú');
  protected readonly appState = this.appStateService.appState;

  ngOnInit(): void {
    this.initializeApp();
  }

  /**
   * Inicialización de la aplicación
   */
  private initializeApp(): void {
    // Configurar SEO y metadatos
    this.initializeSEO();

    // Configurar tema inicial
    this.initializeTheme();
  }

  /**
   * Inicializar configuración SEO
   * Establece meta tags, structured data y optimizaciones para buscadores
   */
  private initializeSEO(): void {
    // Configurar meta tags principales
    this.seoService.updateMetaTags({
      title: 'RiesGIRD-ACC Perú | Red de Gestión Integral del Riesgo de Desastres',
      description: 'Red de 27 Instituciones de Educación Superior para la Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático en Perú. Liderazgo 2024-2027.',
      keywords: 'RiesGIRD, gestión de riesgos, desastres, cambio climático, universidades Perú, prevención desastres, adaptación climática, educación superior, riesgo de desastres, resilencia',
      url: 'https://james250920.github.io/Riesgird_web/',
      image: 'https://james250920.github.io/Riesgird_web/assets/logo.svg',
      type: 'website',
      author: 'RiesGIRD-ACC Perú'
    });

    // Inyectar structured data (Schema.org)
    const organizationSchema = this.seoService.generateOrganizationSchema();
    this.seoService.injectStructuredData(organizationSchema, 'org-schema');

    console.log('[SEO] Initialized successfully');
  }

  /**
   * Inicializar tema de la aplicación
   */
  private initializeTheme(): void {
    // El servicio AppState ya maneja la inicialización del tema
    const theme = this.appState().theme;
    console.log('App initialized with theme:', theme);
  }
}

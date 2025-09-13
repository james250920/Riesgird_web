import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar.component';
import { Footer } from './components/footer/footer.component';
import { AppStateService } from './shared/services/app-state.service';

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
    // Configurar metadatos básicos
    this.setDocumentTitle();
    this.setDocumentDescription();

    // Configurar tema inicial
    this.initializeTheme();
  }

  /**
   * Establecer título del documento
   */
  private setDocumentTitle(): void {
    document.title = this.title();
  }

  /**
   * Establecer descripción del documento
   */
  private setDocumentDescription(): void {
    const description =
      'Red de Instituciones de Educación Superior para la Gestión Integral del Riesgo de Desastres - Academia del Cambio Climático / Perú';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  /**
   * Inicializar tema de la aplicación
   */
  private initializeTheme(): void {
    // El servicio AppState ya maneja la inicialización del tema
    // Aquí podríamos agregar lógica adicional si es necesario
    const theme = this.appState().theme;
    console.log('App initialized with theme:', theme);
  }
}

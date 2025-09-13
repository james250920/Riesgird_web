import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponentDirective, NavigationService } from '../../shared';

/**
 * Componente footer de la aplicación
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class Footer extends BaseComponentDirective {
  // Servicios inyectados
  private readonly navigationService = inject(NavigationService);

  // Computed signals públicos
  public readonly currentYear = computed(() => new Date().getFullYear());
  public readonly footerNavItems = computed(() => this.navigationService.footerNavigationItems);
  public readonly externalLinks = computed(() => this.navigationService.externalLinks);

  constructor() {
    super();
  }

  protected initializeComponent(): void {
    this.id = this.id || this.generateComponentId('footer');
    this.ariaLabel = this.ariaLabel || 'Pie de página con enlaces adicionales';
  }

  /**
   * Abrir enlace externo en nueva pestaña
   */
  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

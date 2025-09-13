import { Component, signal, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseComponentDirective, NavigationService, NavigationItem } from '../../shared';

/**
 * Componente de navegación principal
 * Implementa el patrón de componente base para consistencia
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar extends BaseComponentDirective {
  // Servicios inyectados
  private readonly navigationService = inject(NavigationService);

  // Estado del menú móvil
  private readonly _isMenuOpen = signal<boolean>(false);

  // Computed signals públicos
  public readonly isMenuOpen = computed(() => this._isMenuOpen());
  public readonly navigationItems = computed(() => this.navigationService.mainNavigationItems);

  // Current route para destacar elemento activo
  public readonly currentRoute = computed(() => this.router.url);

  constructor() {
    super();
  }

  protected initializeComponent(): void {
    // Inicialización específica del navbar
    this.id = this.id || this.generateComponentId('navbar');
    this.ariaLabel = this.ariaLabel || 'Navegación principal';
  }

  /**
   * Toggle del menú móvil
   */
  toggleMobileMenu(): void {
    this._isMenuOpen.update((current) => !current);
  }

  /**
   * Cerrar menú móvil
   */
  closeMobileMenu(): void {
    this._isMenuOpen.set(false);
  }

  /**
   * Verificar si una ruta está activa
   */
  isRouteActive(itemPath: string): boolean {
    return this.navigationService.isRouteActive(this.currentRoute(), itemPath);
  }

  /**
   * Manejar click en item de navegación
   */
  onNavigationItemClick(item: NavigationItem): void {
    // Cerrar menú móvil en navegación
    this.closeMobileMenu();

    // Si es enlace externo, abrir en nueva pestaña
    if (item.isExternal && item.path.startsWith('http')) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
      return;
    }

    // Navegación normal
    this.router.navigate([item.path]);
  }

  /**
   * Manejar escape key para cerrar menú
   */
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  /**
   * TrackBy function para optimización de rendimiento
   */
  trackByNavItem(index: number, item: NavigationItem): string {
    return item.id;
  }
}

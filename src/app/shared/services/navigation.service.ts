import { Injectable } from '@angular/core';
import { NavigationItem } from '../interfaces/common.interface';

/**
 * Servicio para gestionar la navegación de la aplicación
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  /**
   * Items de navegación principal
   */
  public readonly mainNavigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Inicio',
      path: '/',
      icon: 'home',
    },
    {
      id: 'council',
      label: 'Consejo',
      path: '/consejo',
      icon: 'people',
    },
    {
      id: 'objectives',
      label: 'Objetivos',
      path: '/objetivos',
      icon: 'target',
    },
    {
      id: 'policies',
      label: 'Lineamientos',
      path: '/lineamientos',
      icon: 'policy',
    },
    {
      id: 'universities',
      label: 'Universidades',
      path: '/universidades',
      icon: 'school',
    },
    {
      id: 'contact',
      label: 'Contacto',
      path: '/contacto',
      icon: 'contact_mail',
    },
  ];

  /**
   * Items de navegación del footer
   */
  public readonly footerNavigationItems: NavigationItem[] = [
    {
      id: 'about',
      label: 'Acerca de',
      path: '/acerca-de',
    },
    {
      id: 'privacy',
      label: 'Privacidad',
      path: '/privacidad',
    },
    {
      id: 'terms',
      label: 'Términos',
      path: '/terminos',
    },
  ];

  /**
   * Enlaces externos útiles
   */
  public readonly externalLinks: NavigationItem[] = [
    {
      id: 'sunedu',
      label: 'SUNEDU',
      path: 'https://www.sunedu.gob.pe',
      isExternal: true,
    },
    {
      id: 'minedu',
      label: 'MINEDU',
      path: 'https://www.gob.pe/minedu',
      isExternal: true,
    },
  ];

  constructor() {}

  /**
   * Obtener item de navegación por ID
   */
  getNavigationItem(id: string): NavigationItem | undefined {
    return this.mainNavigationItems.find((item) => item.id === id);
  }

  /**
   * Obtener items de navegación por categoría
   */
  getNavigationItemsByCategory(category: 'main' | 'footer' | 'external'): NavigationItem[] {
    switch (category) {
      case 'main':
        return this.mainNavigationItems;
      case 'footer':
        return this.footerNavigationItems;
      case 'external':
        return this.externalLinks;
      default:
        return [];
    }
  }

  /**
   * Verificar si una ruta está activa
   */
  isRouteActive(currentPath: string, itemPath: string): boolean {
    if (itemPath === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(itemPath);
  }
}

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
      id: 'inicio',
      label: 'Inicio',
      path: '#inicio',
      icon: 'home',
    },
    {
      id: 'sobre-nosotros',
      label: 'Quiénes Somos',
      path: '#sobre-nosotros',
      icon: 'info',
    },
    {
      id: 'directorio',
      label: 'Directorio',
      path: '#directorio',
      icon: 'people',
    },
    {
      id: 'aliados',
      label: 'Aliados',
      path: '#aliados',
      icon: 'handshake',
    },
    {
      id: 'membresia',
      label: 'Membresía',
      path: '#membresia',
      icon: 'card_membership',
    },
    {
      id: 'asambleas',
      label: 'Asambleas',
      path: '#asambleas',
      icon: 'groups',
    },
    {
      id: 'plan-trabajo',
      label: 'Plan de Trabajo',
      path: '#plan-trabajo',
      icon: 'assignment',
    },
    {
      id: 'memorias',
      label: 'Memorias',
      path: '#memorias',
      icon: 'library_books',
    },
    {
      id: 'contacto',
      label: 'Contacto',
      path: '#contacto',
      icon: 'contact_mail',
    },
  ];

  /**
   * Items de navegación del footer
   */
  public readonly footerNavigationItems: NavigationItem[] = [
    {
      id: 'estatuto',
      label: 'Estatuto',
      path: '#estructura',
    },
    {
      id: 'membresia',
      label: 'Únete a la Red',
      path: '#membresia',
    },
    {
      id: 'contacto',
      label: 'Contacto',
      path: '#contacto',
    },
  ];

  /**
   * Enlaces externos útiles
   */
  public readonly externalLinks: NavigationItem[] = [
    {
      id: 'cenepred',
      label: 'CENEPRED',
      path: 'https://www.gob.pe/cenepred',
      isExternal: true,
    },
    {
      id: 'indeci',
      label: 'INDECI',
      path: 'https://www.gob.pe/indeci',
      isExternal: true,
    },
    {
      id: 'minam',
      label: 'MINAM',
      path: 'https://www.gob.pe/minam',
      isExternal: true,
    },
    {
      id: 'sunedu',
      label: 'SUNEDU',
      path: 'https://www.sunedu.gob.pe',
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

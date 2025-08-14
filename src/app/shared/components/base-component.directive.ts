import { Directive, inject, signal, computed, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BaseComponent, PageMeta } from '../interfaces/common.interface';
import { AppStateService } from '../services/app-state.service';

/**
 * Componente base abstracto que proporciona funcionalidad común
 * para todos los componentes de la aplicación
 */
@Directive()
export abstract class BaseComponentDirective implements BaseComponent, OnInit, OnDestroy {
  // Servicios inyectados
  protected readonly router = inject(Router);
  protected readonly appStateService = inject(AppStateService);

  // Subject para manejar la destrucción del componente
  protected readonly destroy$ = new Subject<void>();

  // Propiedades base del componente
  @Input() id?: string;
  @Input() cssClass?: string;
  @Input() ariaLabel?: string;

  // Signals para estado del componente
  protected readonly isLoading = signal<boolean>(false);
  protected readonly hasError = signal<boolean>(false);
  protected readonly errorMessage = signal<string>('');

  // Computed signals públicos
  public readonly componentState = computed(() => ({
    isLoading: this.isLoading(),
    hasError: this.hasError(),
    errorMessage: this.errorMessage(),
    id: this.id,
    cssClass: this.cssClass,
    ariaLabel: this.ariaLabel
  }));

  // Estado de la aplicación
  public readonly appState = this.appStateService.appState;

  constructor() {}

  ngOnInit(): void {
    this.initializeComponent();
    this.setupRouterSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Método abstracto que debe ser implementado por los componentes hijos
   * para definir su inicialización específica
   */
  protected abstract initializeComponent(): void;

  /**
   * Método opcional para definir metadatos de la página
   */
  protected getPageMeta(): PageMeta | null {
    return null;
  }

  /**
   * Establecer estado de carga
   */
  protected setLoading(loading: boolean): void {
    this.isLoading.set(loading);
  }

  /**
   * Establecer estado de error
   */
  protected setError(hasError: boolean, message: string = ''): void {
    this.hasError.set(hasError);
    this.errorMessage.set(message);
  }

  /**
   * Limpiar errores
   */
  protected clearError(): void {
    this.hasError.set(false);
    this.errorMessage.set('');
  }

  /**
   * Manejar errores de forma consistente
   */
  protected handleError(error: any, customMessage?: string): void {
    console.error('Component error:', error);

    const message = customMessage ||
                   error?.message ||
                   'Ha ocurrido un error inesperado';

    this.setError(true, message);
    this.setLoading(false);
  }

  /**
   * Configurar suscripción al router para eventos de navegación
   */
  private setupRouterSubscription(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.onNavigationEnd(event);
      });
  }

  /**
   * Método que se ejecuta cuando cambia la navegación
   */
  protected onNavigationEnd(event: NavigationEnd): void {
    // Lógica por defecto - puede ser sobrescrita por componentes hijos
    this.clearError();
  }

  /**
   * Generar ID único para el componente
   */
  protected generateComponentId(prefix: string = 'component'): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Método para trackBy en listas (optimización de rendimiento)
   */
  protected trackByIndex(index: number, item: any): any {
    return item?.id || index;
  }

  /**
   * Método para trackBy usando ID del item
   */
  protected trackById(index: number, item: any): any {
    return item?.id || index;
  }
}

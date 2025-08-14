import { Injectable, signal, computed } from '@angular/core';
import { Theme, Language, AppState } from '../interfaces/common.interface';

/**
 * Servicio para gestionar el estado global de la aplicación
 */
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  // Signals para estado reactivo
  private readonly _theme = signal<Theme>('light');
  private readonly _language = signal<Language>('es');
  private readonly _isLoading = signal<boolean>(false);

  // Computed signals públicos
  public readonly theme = computed(() => this._theme());
  public readonly language = computed(() => this._language());
  public readonly isLoading = computed(() => this._isLoading());

  // Estado completo computed
  public readonly appState = computed<AppState>(() => ({
    theme: this._theme(),
    language: this._language(),
    isLoading: this._isLoading(),
  }));

  constructor() {
    this.loadPersistedState();
  }

  /**
   * Cambiar tema de la aplicación
   */
  setTheme(theme: Theme): void {
    this._theme.set(theme);
    this.persistState();
    this.applyTheme(theme);
  }

  /**
   * Cambiar idioma de la aplicación
   */
  setLanguage(language: Language): void {
    this._language.set(language);
    this.persistState();
  }

  /**
   * Establecer estado de carga
   */
  setLoading(loading: boolean): void {
    this._isLoading.set(loading);
  }

  /**
   * Cargar estado persistido del localStorage
   */
  private loadPersistedState(): void {
    try {
      const savedTheme = localStorage.getItem('app-theme') as Theme;
      const savedLanguage = localStorage.getItem('app-language') as Language;

      if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
        this._theme.set(savedTheme);
        this.applyTheme(savedTheme);
      }

      if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
        this._language.set(savedLanguage);
      }
    } catch (error) {
      console.warn('Error loading persisted state:', error);
    }
  }

  /**
   * Persistir estado en localStorage
   */
  private persistState(): void {
    try {
      localStorage.setItem('app-theme', this._theme());
      localStorage.setItem('app-language', this._language());
    } catch (error) {
      console.warn('Error persisting state:', error);
    }
  }

  /**
   * Aplicar tema al documento
   */
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    // Remover clases de tema existentes
    root.classList.remove('light', 'dark');

    if (theme === 'auto') {
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
  }
}

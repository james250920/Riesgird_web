/**
 * Interfaces comunes para la aplicación RiesGIRD
 */

// Interfaz base para componentes
export interface BaseComponent {
  readonly id?: string;
  readonly cssClass?: string;
  readonly ariaLabel?: string;
}

// Interfaz para navegación
export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly path: string;
  readonly icon?: string;
  readonly isExternal?: boolean;
  readonly children?: NavigationItem[];
}

// Interfaz para metadatos de página
export interface PageMeta {
  readonly title: string;
  readonly description?: string;
  readonly keywords?: string[];
  readonly author?: string;
  readonly canonicalUrl?: string;
}

// Interfaz para datos de contacto
export interface ContactInfo {
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly position?: string;
  readonly institution?: string;
  readonly address?: Address;
}

// Interfaz para dirección
export interface Address {
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly zipCode: string;
  readonly country: string;
}

// Interfaz para universidad
export interface University {
  readonly id: string;
  readonly name: string;
  readonly shortName?: string;
  readonly logo?: string;
  readonly website?: string;
  readonly established?: number;
  readonly location: Address;
  readonly contactInfo: ContactInfo;
  readonly description?: string;
  readonly faculties?: Faculty[];
}

// Interfaz para facultad
export interface Faculty {
  readonly id: string;
  readonly name: string;
  readonly dean?: string;
  readonly website?: string;
  readonly programs?: AcademicProgram[];
}

// Interfaz para programa académico
export interface AcademicProgram {
  readonly id: string;
  readonly name: string;
  readonly degree: 'bachelor' | 'master' | 'doctorate' | 'certificate';
  readonly duration: number; // en años
  readonly description?: string;
}

// Interfaz para miembro del consejo
export interface CouncilMember {
  readonly id: string;
  readonly name: string;
  readonly position: string;
  readonly institution: string;
  readonly email: string;
  readonly phone?: string;
  readonly photo?: string;
  readonly biography?: string;
  readonly expertise?: string[];
  readonly startDate: Date;
  readonly endDate?: Date;
}

// Interfaz para objetivo
export interface Objective {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: 'general' | 'specific' | 'strategic';
  readonly priority: 'high' | 'medium' | 'low';
  readonly deadline?: Date;
  readonly responsible?: string;
  readonly indicators?: PerformanceIndicator[];
}

// Interfaz para indicador de desempeño
export interface PerformanceIndicator {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly unit: string;
  readonly target: number;
  readonly current?: number;
  readonly lastUpdated?: Date;
}

// Interfaz para política/lineamiento
export interface Policy {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly version: string;
  readonly status: 'draft' | 'active' | 'archived';
  readonly approvedBy?: string;
  readonly approvalDate?: Date;
  readonly effectiveDate?: Date;
  readonly expirationDate?: Date;
  readonly documents?: PolicyDocument[];
}

// Interfaz para documento de política
export interface PolicyDocument {
  readonly id: string;
  readonly title: string;
  readonly filename: string;
  readonly url: string;
  readonly type: 'pdf' | 'doc' | 'docx' | 'other';
  readonly size: number; // en bytes
  readonly uploadDate: Date;
}

// Tipos de utilidad
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type Theme = 'light' | 'dark' | 'auto';
export type Language = 'es' | 'en';

// Interfaz para estado de la aplicación
export interface AppState {
  readonly theme: Theme;
  readonly language: Language;
  readonly isLoading: boolean;
  readonly user?: UserProfile;
}

// Interfaz para perfil de usuario
export interface UserProfile {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: 'admin' | 'moderator' | 'user';
  readonly preferences: UserPreferences;
}

// Interfaz para preferencias de usuario
export interface UserPreferences {
  readonly theme: Theme;
  readonly language: Language;
  readonly notifications: boolean;
  readonly emailUpdates: boolean;
}

// Interfaz para respuesta de API
export interface ApiResponse<T> {
  readonly data: T;
  readonly success: boolean;
  readonly message?: string;
  readonly errors?: string[];
  readonly timestamp: Date;
}

// Interfaz para paginación
export interface Pagination {
  readonly page: number;
  readonly limit: number;
  readonly total: number;
  readonly totalPages: number;
  readonly hasNext: boolean;
  readonly hasPrev: boolean;
}

// Interfaz para búsqueda
export interface SearchParams {
  readonly query: string;
  readonly filters?: SearchFilter[];
  readonly sortBy?: string;
  readonly sortOrder?: 'asc' | 'desc';
  readonly pagination?: Pagination;
}

// Interfaz para filtro de búsqueda
export interface SearchFilter {
  readonly field: string;
  readonly operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in';
  readonly value: any;
}

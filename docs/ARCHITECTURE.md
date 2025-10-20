# Guía de Arquitectura - RiesGIRD-ACC / Perú

## 📐 Visión General de la Arquitectura

Esta aplicación sigue una arquitectura **Single Page Application (SPA)** basada en componentes standalone de Angular 19, con navegación por scroll suave en lugar de cambios de ruta tradicionales.

## 🏗️ Patrones de Diseño

### 1. Component-Based Architecture
- Componentes standalone (sin NgModules)
- Componentes reutilizables y encapsulados
- Comunicación mediante servicios inyectables

### 2. Reactive Programming
- RxJS para manejo de estado asíncrono
- Signals de Angular para estado reactivo
- Computed values para datos derivados

### 3. Service Layer Pattern
- Servicios singleton inyectables
- Separación de lógica de negocio
- Estado centralizado en servicios

### 4. Composition over Inheritance
- Directiva base `BaseComponentDirective`
- Mixins y composición de funcionalidades
- Inyección de dependencias

## 🗂️ Estructura de Carpetas Detallada

```
src/app/
├── components/              # Componentes de layout y reutilizables
│   ├── footer/
│   └── navbar/
│
├── pages/                   # Vistas/páginas de la aplicación
│   ├── contact/            # Vista de contacto
│   ├── council/            # Vista de consejo directivo
│   ├── event/              # Vista de eventos
│   ├── home/               # Vista principal (contenedor de todas)
│   ├── objectives/         # Vista de objetivos
│   ├── policies/           # Vista de lineamientos
│   └── universities/       # Vista de universidades
│
├── shared/                  # Código compartido entre módulos
│   ├── components/         # Componentes compartidos
│   │   ├── base-component.directive.ts
│   │   ├── confirm-dialog/
│   │   └── loading-spinner/
│   ├── interfaces/         # Interfaces TypeScript
│   │   └── common.interface.ts
│   ├── pipes/              # Pipes personalizados
│   │   └── truncate.pipe.ts
│   ├── services/           # Servicios compartidos
│   │   ├── app-state.service.ts
│   │   └── navigation.service.ts
│   └── index.ts            # Barrel export
│
├── app.config.ts            # Configuración de la aplicación
├── app.routes.ts            # Definición de rutas
├── app.ts                   # Componente raíz
└── data.ts                  # Datos estáticos
```

## 🔄 Flujo de Navegación

### Navegación Tradicional vs Actual

**Antes (Routing tradicional):**
```
/           → Home Component
/consejo    → Council Component
/eventos    → Events Component
/objetivos  → Objectives Component
```

**Ahora (Scroll con anclas):**
```
/          → Home Component (contiene todo)
  #inicio       → Hero section
  #consejo      → Council section
  #eventos      → Events section
  #objetivos    → Objectives section
  #universidades → Universities section
  #politicas    → Policies section
  #contacto     → Contact section
```

### Implementación de Scroll Suave

```typescript
// navigation.service.ts
mainNavigationItems = [
  { id: 'home', label: 'Inicio', path: '#inicio' },
  { id: 'council', label: 'Consejo', path: '#consejo' },
  // ...
];

// navbar.component.ts
onNavigationItemClick(item: NavigationItem, event?: Event): void {
  if (item.path.startsWith('#')) {
    event?.preventDefault();
    const targetId = item.path.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
```

## 🧩 Componentes Detallados

### Componente Base

```typescript
// base-component.directive.ts
@Directive()
export abstract class BaseComponentDirective {
  protected readonly router = inject(Router);
  protected readonly appState = inject(AppStateService);
  
  public id?: string;
  public ariaLabel?: string;
  public cssClass?: string;

  constructor() {
    this.initializeComponent();
  }

  protected abstract initializeComponent(): void;
  protected generateComponentId(prefix: string): string;
}
```

Todos los componentes de layout (Navbar, Footer) extienden esta clase base.

### Estructura de Componente Típico

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  // Propiedades públicas
  data = RIES_INFO.example;

  // Métodos públicos
  trackByIndex(index: number): number {
    return index;
  }
}
```

## 🔌 Servicios

### NavigationService

**Responsabilidades:**
- Gestionar items de navegación
- Proveer lógica de navegación
- Determinar rutas activas

```typescript
@Injectable({ providedIn: 'root' })
export class NavigationService {
  public readonly mainNavigationItems: NavigationItem[];
  public readonly footerNavigationItems: NavigationItem[];
  public readonly externalLinks: NavigationItem[];
}
```

### AppStateService

**Responsabilidades:**
- Estado global de la aplicación
- Loading states
- Error handling
- User preferences

```typescript
@Injectable({ providedIn: 'root' })
export class AppStateService {
  private readonly _appState = signal<AppState>({
    isLoading: false,
    error: null,
    theme: 'light'
  });

  public readonly appState = computed(() => this._appState());
}
```

## 📊 Gestión de Datos

### Archivo data.ts

Contiene todos los datos estáticos de la aplicación:

```typescript
export const RIES_INFO = {
  liderazgos: [...],
  consejoDirectivo: {...},
  objetivos: [...],
  lineamientos: [...],
  universidades: [...],
  eventos: [...]
};
```

**Ventajas:**
- ✅ Centralización de datos
- ✅ Fácil actualización
- ✅ Type-safe con TypeScript
- ✅ Sin necesidad de API para datos estáticos

**Desventajas:**
- ❌ Datos hardcodeados (no dinámicos)
- ❌ Requiere rebuild para actualizar

**Migración Futura:**
Si se necesita contenido dinámico, se puede reemplazar por:
- API REST
- CMS headless (Strapi, Contentful)
- Firebase/Supabase

## 🎨 Sistema de Estilos

### Estrategia de Estilos

1. **Global Styles** (`styles.scss`)
   - Reset CSS
   - Tailwind base, components, utilities
   - Variables CSS custom properties
   - Utility classes globales

2. **Component Styles** (`.component.scss`)
   - Estilos específicos del componente
   - BEM naming convention
   - SCSS nesting

3. **Tailwind Utilities** (HTML)
   - Utility-first approach
   - Responsive design
   - Estados (hover, focus, active)

### Paleta de Colores

```scss
// Primary (Sky/Blue)
primary-50:  #f0f9ff
primary-500: #0ea5e9  // Brand color
primary-600: #0284c7
primary-700: #0369a1

// Gray
gray-50:  #f9fafb
gray-500: #6b7280
gray-900: #111827
```

### Responsive Breakpoints

```javascript
// tailwind.config.js
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## 🚀 Optimizaciones de Rendimiento

### 1. Lazy Loading
- Componentes cargados on-demand
- Rutas con lazy loading (si se implementan en futuro)

### 2. Code Splitting
- Chunks automáticos por vendor
- Separación de RxJS

```javascript
// vite.config.js
rollupOptions: {
  output: {
    manualChunks: {
      vendor: ['@angular/core', '@angular/common', '@angular/router'],
      rxjs: ['rxjs']
    }
  }
}
```

### 3. Build Optimization
- Minificación de JS/CSS
- Tree shaking
- Dead code elimination
- Source maps solo en desarrollo

### 4. Assets Optimization
- Imágenes en formatos modernos (WebP recomendado)
- SVG para logos e iconos
- Lazy loading de imágenes (implementar en futuro)

## 🔒 Seguridad

### Best Practices Implementadas

1. **Angular Sanitization**
   - Sanitización automática de templates
   - DomSanitizer para contenido dinámico

2. **Type Safety**
   - TypeScript strict mode
   - Interfaces para todos los datos

3. **Content Security Policy**
   - Headers CSP configurables
   - Inline scripts minimizados

4. **Dependency Security**
   - Dependencias actualizadas
   - Audit regular con `npm audit`

## 🧪 Testing

### Estructura de Tests

```typescript
describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Comandos de Test

```bash
# Tests unitarios
npm test

# Tests con coverage
npm run test:ci

# Tests en modo watch
npm run watch
```

## 📈 Monitoreo y Analytics

### Recomendaciones para Implementar

1. **Google Analytics 4**
   - Tracking de navegación
   - Eventos personalizados
   - Conversiones

2. **Error Tracking**
   - Sentry
   - LogRocket
   - Rollbar

3. **Performance Monitoring**
   - Lighthouse CI
   - Web Vitals
   - Bundle analyzer

## 🔄 CI/CD Pipeline (Recomendado)

### GitHub Actions Workflow

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:ci
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/riesgird-web/browser
```

## 🛣️ Roadmap Futuro

### Mejoras Planificadas

1. **Backend/API**
   - Migrar datos estáticos a API
   - CMS para gestión de contenido
   - Autenticación para administradores

2. **Funcionalidades**
   - Sistema de búsqueda
   - Filtros avanzados en eventos
   - Galería de imágenes
   - Newsletter subscription

3. **SEO y Accesibilidad**
   - Server-side rendering (SSR)
   - Meta tags dinámicos
   - Schema.org markup
   - WCAG 2.1 AA compliance

4. **Internacionalización**
   - Multi-idioma (ES/EN/PT)
   - i18n con Angular

5. **PWA**
   - Service Worker
   - Offline support
   - App manifest
   - Push notifications

---

**Última actualización**: Octubre 2025

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

## 🔐 Sistema de Seguridad

### Arquitectura de Protección de Datos

La aplicación implementa un sistema multicapa para proteger información de contacto contra scraping automatizado.

#### Capa 1: SecurityService

**Ubicación**: `src/app/shared/services/security.service.ts`

```typescript
@Injectable({ providedIn: 'root' })
export class SecurityService {
  /**
   * Codifica un email usando ROT13 + Base64
   * Ejemplo: "test@email.com" → "grfgOrznvyNpbz"
   */
  encodeEmail(email: string): string {
    const rot13 = this.rot13(email);
    return btoa(rot13);
  }

  /**
   * Decodifica un email ofuscado
   */
  decodeEmail(encoded: string): string {
    try {
      const decoded = atob(encoded);
      return this.rot13(decoded);
    } catch (error) {
      console.error('Error decoding email:', error);
      return '';
    }
  }

  /**
   * Codifica un teléfono
   * Ejemplo: "+51 998 678 236" → "KzUx-IDs5OC04Nzg-IjIzNg"
   */
  encodePhone(phone: string): string {
    const rot13 = this.rot13(phone);
    return btoa(rot13);
  }

  /**
   * Decodifica un teléfono ofuscado
   */
  decodePhone(encoded: string): string {
    try {
      const decoded = atof(encoded);
      return this.rot13(decoded);
    } catch (error) {
      console.error('Error decoding phone:', error);
      return '';
    }
  }

  /**
   * Cifrado ROT13 - Rotación de 13 posiciones
   * Aplicado a: a-z, A-Z, 0-9
   */
  private rot13(str: string): string {
    return str.replace(/[a-zA-Z0-9]/g, (char) => {
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
      }
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      }
      if (char >= '0' && char <= '9') {
        return String.fromCharCode(((char.charCodeAt(0) - 48 + 5) % 10) + 48);
      }
      return char;
    });
  }

  /**
   * Maneja click en email ofuscado
   * Previene evento predeterminado y abre mailto: dinámicamente
   */
  handleEmailClick(encodedEmail: string, event: Event): void {
    event.preventDefault();
    const decodedEmail = this.decodeEmail(encodedEmail);
    if (decodedEmail) {
      window.location.href = `mailto:${decodedEmail}`;
    }
  }

  /**
   * Maneja click en teléfono ofuscado
   * Previene evento predeterminado y abre tel: dinámicamente
   */
  handlePhoneClick(encodedPhone: string, event: Event): void {
    event.preventDefault();
    const decodedPhone = this.decodePhone(encodedPhone);
    if (decodedPhone) {
      window.location.href = `tel:${decodedPhone}`;
    }
  }
}
```

**Algoritmo ROT13:**
- Rotación de 13 posiciones en alfabeto (a→n, b→o, z→m)
- Rotación de 5 posiciones en dígitos (0→5, 5→0, 9→4)
- Simétrico: aplicar dos veces retorna original
- Ofusca sin ser criptografía fuerte

#### Capa 2: Pipes de Decodificación

**Ubicación**: `src/app/shared/pipes/security.pipe.ts`

```typescript
// Pipe para decodificar emails en templates
@Pipe({
  name: 'decodeEmail',
  standalone: true
})
export class DecodeEmailPipe implements PipeTransform {
  private securityService = inject(SecurityService);

  transform(encodedEmail: string): string {
    if (!encodedEmail) return '';
    return this.securityService.decodeEmail(encodedEmail);
  }
}

// Pipe para decodificar teléfonos
@Pipe({
  name: 'decodePhone',
  standalone: true
})
export class DecodePhonePipe implements PipeTransform {
  private securityService = inject(SecurityService);

  transform(encodedPhone: string): string {
    if (!encodedPhone) return '';
    return this.securityService.decodePhone(encodedPhone);
  }
}

// Pipes adicionales para encoding (opcional)
@Pipe({ name: 'encodeEmail', standalone: true })
export class EncodeEmailPipe implements PipeTransform { /* ... */ }

@Pipe({ name: 'encodePhone', standalone: true })
export class EncodePhonePipe implements PipeTransform { /* ... */ }
```

**Uso en Templates:**

```html
<!-- Email ofuscado en data.ts, mostrado normal al usuario -->
<a href="mailto:{{ contact.email | decodeEmail }}">
  {{ contact.email | decodeEmail }}
</a>

<!-- Teléfono ofuscado -->
<a href="tel:{{ contact.phone | decodePhone }}">
  {{ contact.phone | decodePhone }}
</a>
```

#### Capa 3: Directivas de Protección

**Ubicación**: `src/app/shared/directives/secure-contact.directive.ts`

```typescript
// Directiva para proteger enlaces de email
@Directive({
  selector: '[appSecureEmail]',
  standalone: true
})
export class SecureEmailDirective implements OnInit {
  @Input() encodedEmail!: string;
  
  private elementRef = inject(ElementRef);
  private securityService = inject(SecurityService);

  ngOnInit(): void {
    // Remueve href del HTML (invisible para scrapers)
    this.elementRef.nativeElement.removeAttribute('href');
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    // Maneja click dinámicamente
    this.securityService.handleEmailClick(this.encodedEmail, event);
  }
}

// Directiva para proteger enlaces de teléfono
@Directive({
  selector: '[appSecurePhone]',
  standalone: true
})
export class SecurePhoneDirective implements OnInit {
  @Input() encodedPhone!: string;
  
  private elementRef = inject(ElementRef);
  private securityService = inject(SecurityService);

  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute('href');
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.securityService.handlePhoneClick(this.encodedPhone, event);
  }
}
```

**Uso con Directivas:**

```html
<!-- Email: href NO aparece en HTML renderizado -->
<a appSecureEmail 
   [encodedEmail]="contact.email"
   class="text-primary-600 hover:text-primary-800">
  {{ contact.email | decodeEmail }}
</a>

<!-- Teléfono: href NO aparece en HTML renderizado -->
<a appSecurePhone 
   [encodedPhone]="contact.phone"
   class="text-primary-600 hover:text-primary-800">
  {{ contact.phone | decodePhone }}
</a>
```

**HTML Renderizado (visto por bots):**

```html
<!-- Sin href visible, datos ofuscados -->
<a class="text-primary-600 hover:text-primary-800">
  nfzbyybOrfnaNqh  <!-- Ofuscado -->
</a>
```

#### Herramienta de Codificación

**Ubicación**: `scripts/encode-data.js`

```javascript
// Script Node.js para codificar contactos
function rot13(str) {
  return str.replace(/[a-zA-Z0-9]/g, (char) => {
    // Implementación ROT13
  });
}

function encodeEmail(email) {
  const rot13Email = rot13(email);
  return Buffer.from(rot13Email).toString('base64');
}

function encodePhone(phone) {
  const rot13Phone = rot13(phone);
  return Buffer.from(rot13Phone).toString('base64');
}

// Datos a codificar
const contacts = {
  emails: [
    'jserida@esan.edu.pe',
    'mmollo@esan.edu.pe',
    'red_riesgird-acc_pe@esan.edu.pe'
  ],
  phones: [
    '+51 998 678 236',
    '998678236'
  ]
};

// Output codificado
console.log('=== EMAILS CODIFICADOS ===');
contacts.emails.forEach(email => {
  console.log(`Original: ${email}`);
  console.log(`Encoded:  ${encodeEmail(email)}\n`);
});

console.log('=== TELÉFONOS CODIFICADOS ===');
contacts.phones.forEach(phone => {
  console.log(`Original: ${phone}`);
  console.log(`Encoded:  ${encodePhone(phone)}\n`);
});
```

**Ejecutar:**

```bash
node scripts/encode-data.js
```

#### Flujo de Datos Completo

```
┌─────────────────────────────────────────────────────────────┐
│ 1. ALMACENAMIENTO (data.ts)                                 │
│    email: "nfzbyybOrfnaNqh" (ROT13 + Base64)                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. COMPONENTE (contact.component.ts)                        │
│    contact = { email: "nfzbyybOrfnaNqh" }                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. TEMPLATE (contact.component.html)                        │
│    <a appSecureEmail [encodedEmail]="contact.email">        │
│      {{ contact.email | decodeEmail }}                      │
│    </a>                                                     │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
┌──────────────────┐           ┌──────────────────┐
│ 4a. PIPE         │           │ 4b. DIRECTIVE    │
│ DecodeEmailPipe  │           │ SecureEmail      │
│ ↓                │           │ ↓                │
│ SecurityService  │           │ SecurityService  │
│ .decodeEmail()   │           │ .handleClick()   │
└────────┬─────────┘           └────────┬─────────┘
         │                               │
         ▼                               ▼
┌──────────────────┐           ┌──────────────────┐
│ 5a. VISUALIZADO  │           │ 5b. CLICK        │
│ "test@email.com" │           │ window.location  │
│ (Normal)         │           │ .href = "mailto:"│
└──────────────────┘           └──────────────────┘
```

#### Ventajas del Sistema

| Aspecto | Implementación | Beneficio |
|---------|---------------|-----------|
| **Ofuscación** | ROT13 + Base64 | Doble capa de encoding |
| **Transparencia** | Pipes automáticos | Usuario ve datos normales |
| **Anti-scraping** | Sin href en HTML | Bots no ven enlaces directos |
| **Reversibilidad** | Decodificación en runtime | Sin pérdida de funcionalidad |
| **Mantenimiento** | Script de encoding | Fácil agregar nuevos datos |
| **Performance** | Pipes pure | Memoización automática |
| **Type Safety** | TypeScript strict | Errores en tiempo de compilación |

#### Limitaciones y Consideraciones

⚠️ **Importante**: Este NO es un sistema de seguridad criptográfica fuerte.

**Propósito:**
- ✅ Dificultar scraping básico (regex, bots simples)
- ✅ Ocultar datos en código fuente HTML
- ✅ Prevenir recolección automática de contactos
- ✅ Mantener experiencia de usuario normal

**NO protege contra:**
- ❌ Inspección manual del código JavaScript
- ❌ Scrapers que ejecutan JavaScript
- ❌ Ingeniería inversa del algoritmo ROT13
- ❌ Bots avanzados con headless browsers

**Recomendaciones adicionales:**
- Implementar CAPTCHA en formularios de contacto
- Rate limiting en servidor
- WAF (Web Application Firewall)
- Honeypots para detectar bots
- Monitoring de tráfico sospechoso



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

# Guía de Componentes - RiesGIRD-ACC / Perú

Esta guía documenta todos los componentes de la aplicación, sus propiedades, eventos y uso.

## 📑 Índice

- [Componentes de Layout](#componentes-de-layout)
- [Componentes de Página](#componentes-de-página)
- [Componentes Compartidos](#componentes-compartidos)

---

## Componentes de Layout

### 🧭 Navbar Component

**Ubicación**: `src/app/components/navbar/`

**Selector**: `<app-navbar>`

#### Descripción
Barra de navegación superior sticky con scroll suave a secciones de la página.

#### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | `string` | Identificador único del navbar |
| `ariaLabel` | `string` | Label de accesibilidad |
| `isMenuOpen` | `Signal<boolean>` | Estado del menú móvil |
| `navigationItems` | `Signal<NavigationItem[]>` | Items de navegación |
| `currentRoute` | `Signal<string>` | Ruta actual |

#### Métodos Públicos

```typescript
toggleMobileMenu(): void
// Abre/cierra el menú móvil

closeMobileMenu(): void
// Cierra el menú móvil

scrollToTop(event?: Event): void
// Scroll suave al inicio de la página

onNavigationItemClick(item: NavigationItem, event?: Event): void
// Maneja el click en items de navegación con scroll suave

onKeydown(event: KeyboardEvent): void
// Maneja teclas (ESC para cerrar menú)

trackByNavItem(index: number, item: NavigationItem): string
// TrackBy function para optimización
```

#### Uso

```html
<!-- En app.component.html -->
<app-navbar></app-navbar>
```

#### Estilos SCSS

```scss
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
}

.navbar__logo {
  height: 2.5rem; // Desktop
  height: 2rem;   // Mobile (@media max-width: 768px)
}
```

#### Características

- ✅ Sticky positioning
- ✅ Scroll suave con JavaScript
- ✅ Menú móvil responsive
- ✅ Auto-cierre al navegar
- ✅ Navegación por teclado
- ✅ Backdrop blur effect
- ✅ Logo clickeable

---

### 📄 Footer Component

**Ubicación**: `src/app/components/footer/`

**Selector**: `<app-footer>`

#### Descripción
Pie de página con información de contacto y descripción de la red.

#### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | `string` | Identificador único del footer |
| `ariaLabel` | `string` | Label de accesibilidad |
| `appState` | `Signal<AppState>` | Estado global de la app |

#### Uso

```html
<!-- En app.component.html -->
<app-footer></app-footer>
```

#### Contenido

- Información de la red
- Secretaría Técnica Nacional
- Datos de contacto (email, teléfono)
- Periodos de liderazgo
- Logo de la red

#### Estilos

```scss
.footer {
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  margin-top: auto;
}

.footer__logo {
  height: 3rem;   // Desktop
  height: 2.5rem; // Mobile (@media max-width: 768px)
}
```

---

## Componentes de Página

### 🏠 Home Component

**Ubicación**: `src/app/pages/home/`

**Selector**: `<app-home>`

**Ruta**: `/`

#### Descripción
Página principal que contiene todas las secciones de la aplicación en un solo lugar con navegación por scroll.

#### Estructura

```html
<section id="inicio">
  <!-- Hero: Logo + Descripción + Botones -->
  <div class="home-main-grid">
    <div class="home-logo">...</div>
    <div class="home-content">...</div>
  </div>

  <!-- Bloques de liderazgo -->
  <div class="home-lidera-row">...</div>

  <!-- Secciones anidadas -->
  <div id="consejo"><app-council></app-council></div>
  <div id="eventos"><app-events></app-events></div>
  <div id="objetivos"><app-objectives></app-objectives></div>
  <div id="universidades"><app-universities></app-universities></div>
  <div id="politicas"><app-policies></app-policies></div>
  <div id="contacto"><app-contact></app-contact></div>
</section>
```

#### IDs de Secciones

| ID | Componente | Descripción |
|----|-----------|-------------|
| `#inicio` | Hero | Sección principal |
| `#consejo` | Council | Consejo Directivo |
| `#eventos` | Events | Eventos y actividades |
| `#objetivos` | Objectives | Objetivos estratégicos |
| `#universidades` | Universities | Universidades miembro |
| `#politicas` | Policies | Lineamientos |
| `#contacto` | Contact | Información de contacto |

#### Estilos Clave

```scss
.home-main-grid {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.home-logo {
  flex: 0 0 auto;
}

.home-content {
  flex: 1 1 300px;
  min-width: 250px;
}

.navbar__logo {
  height: 8rem;  // Desktop
  height: 4rem;  // Mobile (@media max-width: 768px)
}
```

---

### 👥 Council Component

**Ubicación**: `src/app/pages/council/`

**Selector**: `<app-council>`

**ID de sección**: `#consejo`

#### Descripción
Muestra el Consejo Directivo 2024-2027 (Perú) con información de presidente, secretario y vocal.

#### Datos

```typescript
// Desde data.ts
consejoDirectivo: {
  peru_2024_2027: [
    {
      rol: 'Presidente',
      nombre: 'Dr. Jaime Serida Nishimura',
      institucion: 'Universidad ESAN (Rector)',
      email: 'jserida@esan.edu.pe'
    },
    // ...
  ],
  secretariaTecnica: {
    nombre: 'Mary Mollo Medina',
    cargo: 'Secretaría Técnica Nacional RiesGIRD-ACC/Perú',
    // ...
  }
}
```

#### Estructura

- Imagen del consejo (centrada con borde redondeado)
- Grid de miembros del consejo (3 columnas en desktop)
- Información de Secretaría Técnica

#### Estilos Especiales

```scss
.council-img-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border-radius: 0.375rem;
}

.navbar__logo {
  border-radius: 0.5rem;
}
```

---

### 📅 Events Component

**Ubicación**: `src/app/pages/event/`

**Selector**: `<app-events>`

**ID de sección**: `#eventos`

#### Descripción
Muestra eventos académicos con sistema de filtros y cards interactivas.

#### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `eventos` | `Event[]` | Lista completa de eventos |
| `eventosFiltrados` | `Event[]` | Eventos después de aplicar filtro |
| `filtroSeleccionado` | `string` | Filtro actual ('todos', 'próximo', 'finalizado') |

#### Métodos

```typescript
filtrarEventos(filtro: string): void
// Filtra eventos por estado

trackByIndex(index: number): number
// TrackBy para optimización

getEstadoColor(estado: string): string
// Retorna clases CSS según estado del evento

formatearFecha(fecha: string): string
// Formatea fecha a formato español
```

#### Interface Event

```typescript
interface Event {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;           // ISO format
  hora: string;
  modalidad: string;       // 'Presencial', 'Virtual', 'Híbrido'
  lugar: string;
  imagen?: string;         // Ruta a la imagen
  organizador: string;
  categoria: string;       // 'Académico', 'Taller', 'Conferencia'
  estado: string;          // 'Próximo', 'Finalizado', 'En curso'
  enlaceInscripcion?: string;
  contacto: {
    email: string;
    telefono: string;
  };
}
```

#### Características

- ✅ Sistema de filtros (Todos, Próximos, Finalizados)
- ✅ Cards con imagen de evento
- ✅ Estados visuales con colores
- ✅ Información completa (fecha, hora, modalidad, lugar)
- ✅ Enlace de inscripción para eventos próximos
- ✅ Información de contacto
- ✅ Fallback para imágenes faltantes

#### Uso de Imágenes

Las imágenes de eventos deben estar en:
```
public/assets/eventos/
```

Y la ruta en el objeto debe ser:
```typescript
imagen: 'assets/eventos/nombre-imagen.png'
```

---

### 🎯 Objectives Component

**Ubicación**: `src/app/pages/objectives/`

**Selector**: `<app-objectives>`

**ID de sección**: `#objetivos`

#### Descripción
Lista numerada de los 6 objetivos estratégicos de la red.

#### Propiedades

```typescript
objetivos = RIES_INFO.objetivos; // Array de 6 objetivos
```

#### Interface Objective

```typescript
interface Objective {
  n: number;        // Número del objetivo (1-6)
  texto: string;    // Descripción del objetivo
}
```

#### Estructura

```html
<ol class="list-decimal">
  <li *ngFor="let o of objetivos">
    <span class="font-semibold">Objetivo {{ o.n }}:</span>
    <span>{{ o.texto }}</span>
  </li>
</ol>
```

#### Los 6 Objetivos

1. Estrategias colaborativas de acción
2. Pertinencia, eficacia y calidad académica
3. Productos de valor mediante alianzas
4. Cuadros técnicos especializados
5. Asistencia humanitaria y ambiente saludable
6. Independencia y autonomía

---

### 🎓 Universities Component

**Ubicación**: `src/app/pages/universities/`

**Selector**: `<app-universities>`

**ID de sección**: `#universidades`

#### Descripción
Grid responsivo con las 27 universidades participantes.

#### Propiedades

```typescript
universidades = RIES_INFO.universidades; // Array de 27 strings
```

#### Estructura

```html
<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
  <div *ngFor="let u of universidades" class="p-4 border rounded-xl">
    {{ u }}
  </div>
</div>
```

#### Universidades Participantes

Total: **27 universidades**

Incluyen:
- Universidad ESAN (líder)
- Universidad Nacional de Ingeniería
- Universidad Nacional Agraria La Molina
- Universidad Nacional Mayor de San Marcos
- Y 23 más...

---

### 📜 Policies Component

**Ubicación**: `src/app/pages/policies/`

**Selector**: `<app-policies>`

**ID de sección**: `#politicas`

#### Descripción
Lista numerada de los 7 lineamientos de gestión institucional.

#### Propiedades

```typescript
lineamientos = RIES_INFO.lineamientos; // Array de 7 lineamientos
```

#### Interface Policy

```typescript
interface Policy {
  n: number;        // Número del lineamiento (1-7)
  texto: string;    // Descripción del lineamiento
}
```

#### Los 7 Lineamientos

1. Políticas y estrategias nacionales en gobernanza universitaria
2. Investigación colaborativa y redes de conocimiento
3. Fortalecimiento de capacidades y formación continua
4. Vinculación con la comunidad y responsabilidad social
5. Gestión del conocimiento y difusión de buenas prácticas
6. Programas académicos conjuntos
7. Alianzas estratégicas con diversos sectores

---

### 📞 Contact Component

**Ubicación**: `src/app/pages/contact/`

**Selector**: `<app-contact>`

**ID de sección**: `#contacto`

#### Descripción
Información de contacto de la Secretaría Técnica Nacional.

#### Información Mostrada

- **Responsable**: Mary Mollo Medina
- **Correo personal**: mmollo@esan.edu.pe
- **Correo de la red**: red_riesgird-acc_pe@esan.edu.pe
- **Teléfono**: +51 998 678 236

#### Estructura

```html
<div class="border rounded-2xl">
  <div>Secretaría Técnica: Mary Mollo Medina</div>
  <div>Correo: <a href="mailto:...">...</a></div>
  <div>Correo de la Red: <a href="mailto:...">...</a></div>
  <div>Teléfono: +51 998 678 236</div>
</div>
```

---

## Componentes Compartidos

### 🧩 Base Component Directive

**Ubicación**: `src/app/shared/components/base-component.directive.ts`

#### Descripción
Directiva base abstracta que proporciona funcionalidad común a todos los componentes de layout.

#### Propiedades

```typescript
protected readonly router: Router;
protected readonly appState: Signal<AppState>;

public id?: string;
public ariaLabel?: string;
public cssClass?: string;
```

#### Métodos

```typescript
protected abstract initializeComponent(): void;
// Método abstracto para inicialización

protected generateComponentId(prefix: string): string;
// Genera IDs únicos para componentes
```

#### Uso

```typescript
export class MyComponent extends BaseComponentDirective {
  constructor() {
    super();
  }

  protected initializeComponent(): void {
    this.id = this.id || this.generateComponentId('my-component');
    this.ariaLabel = this.ariaLabel || 'Mi componente';
  }
}
```

---

### 🔄 Loading Spinner Component

**Ubicación**: `src/app/shared/components/loading-spinner/`

**Selector**: `<app-loading-spinner>`

#### Descripción
Spinner de carga reutilizable.

#### Props (Inputs)

```typescript
@Input() size: 'small' | 'medium' | 'large' = 'medium';
@Input() color: string = 'primary';
```

#### Uso

```html
<app-loading-spinner 
  [size]="'large'" 
  [color]="'primary'">
</app-loading-spinner>
```

---

### ✅ Confirm Dialog Component

**Ubicación**: `src/app/shared/components/confirm-dialog/`

**Selector**: `<app-confirm-dialog>`

#### Descripción
Diálogo de confirmación modal.

#### Props (Inputs)

```typescript
@Input() title: string;
@Input() message: string;
@Input() confirmText: string = 'Confirmar';
@Input() cancelText: string = 'Cancelar';
```

#### Events (Outputs)

```typescript
@Output() confirm = new EventEmitter<void>();
@Output() cancel = new EventEmitter<void>();
```

#### Uso

```html
<app-confirm-dialog
  [title]="'¿Confirmar acción?'"
  [message]="'Esta acción no se puede deshacer'"
  (confirm)="onConfirm()"
  (cancel)="onCancel()">
</app-confirm-dialog>
```

---

## 🔧 Pipes Personalizados

### Truncate Pipe

**Ubicación**: `src/app/shared/pipes/truncate.pipe.ts`

#### Descripción
Trunca texto largo y agrega ellipsis.

#### Uso

```html
<p>{{ longText | truncate:100 }}</p>
<!-- Output: "Este es un texto muy largo que será trun..." -->
```

#### Parámetros

```typescript
transform(value: string, limit: number = 50): string
```

---

## 📝 Convenciones de Nomenclatura

### Selectores de Componentes

```
app-[nombre-componente]
```

Ejemplos:
- `app-navbar`
- `app-footer`
- `app-events`
- `app-objectives`

### Archivos de Componentes

```
[nombre].component.ts
[nombre].component.html
[nombre].component.scss
[nombre].component.spec.ts
```

### Clases CSS (BEM)

```scss
.componente { ... }
.componente__elemento { ... }
.componente__elemento--modificador { ... }
```

Ejemplo:
```scss
.navbar { ... }
.navbar__container { ... }
.navbar__nav-item { ... }
.navbar__nav-item--active { ... }
```

---

## 🔐 Componentes de Seguridad

### 🛡️ SecurityService

**Ubicación**: `src/app/shared/services/security.service.ts`

**Tipo**: Service (Injectable)

#### Descripción
Servicio central para la ofuscación y deofuscación de datos sensibles (emails y teléfonos) usando ROT13 + Base64.

#### Métodos Públicos

```typescript
encodeEmail(email: string): string
// Codifica un email usando ROT13 + Base64
// Ejemplo: "test@email.com" → "grfgOrznvyNpbz"

decodeEmail(encoded: string): string
// Decodifica un email ofuscado
// Ejemplo: "grfgOrznvyNpbz" → "test@email.com"

encodePhone(phone: string): string
// Codifica un teléfono usando ROT13 + Base64
// Ejemplo: "+51 998 678 236" → "KzUx-IDs5OC04Nzg-IjIzNg"

decodePhone(encoded: string): string
// Decodifica un teléfono ofuscado

handleEmailClick(encodedEmail: string, event: Event): void
// Maneja click en enlaces de email ofuscados
// Previene evento predeterminado y abre mailto: dinámicamente

handlePhoneClick(encodedPhone: string, event: Event): void
// Maneja click en enlaces de teléfono ofuscados
// Previene evento predeterminado y abre tel: dinámicamente
```

#### Uso

```typescript
import { SecurityService } from '@shared/services/security.service';

@Component({ /* ... */ })
export class MyComponent {
  private securityService = inject(SecurityService);

  encodedEmail = this.securityService.encodeEmail('test@email.com');
  
  decodeAndShow() {
    const decoded = this.securityService.decodeEmail(this.encodedEmail);
    console.log(decoded); // "test@email.com"
  }
}
```

---

### 📧 DecodeEmailPipe

**Ubicación**: `src/app/shared/pipes/security.pipe.ts`

**Selector**: `decodeEmail`

#### Descripción
Pipe para decodificar emails ofuscados en templates.

#### Uso

```html
<!-- Decodifica email para mostrar -->
<span>{{ 'grfgOrznvyNpbz' | decodeEmail }}</span>
<!-- Output: test@email.com -->

<!-- En enlaces -->
<a href="mailto:{{ encodedEmail | decodeEmail }}">
  {{ encodedEmail | decodeEmail }}
</a>
```

#### Importación

```typescript
import { DecodeEmailPipe } from '@shared/pipes/security.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [DecodeEmailPipe],
  // ...
})
```

---

### 📞 DecodePhonePipe

**Ubicación**: `src/app/shared/pipes/security.pipe.ts`

**Selector**: `decodePhone`

#### Descripción
Pipe para decodificar teléfonos ofuscados en templates.

#### Uso

```html
<!-- Decodifica teléfono para mostrar -->
<span>{{ 'KzUx-IDs5OC04Nzg-IjIzNg' | decodePhone }}</span>
<!-- Output: +51 998 678 236 -->

<!-- En enlaces -->
<a href="tel:{{ encodedPhone | decodePhone }}">
  {{ encodedPhone | decodePhone }}
</a>
```

---

### 🔒 SecureEmailDirective

**Ubicación**: `src/app/shared/directives/secure-contact.directive.ts`

**Selector**: `[appSecureEmail]`

#### Descripción
Directiva que protege enlaces de email removiendo el atributo `href` del HTML y manejando clicks dinámicamente.

#### Propiedades de Entrada

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `encodedEmail` | `string` | Email ofuscado con ROT13 + Base64 |

#### Uso

```html
<!-- Protege enlace de email -->
<a appSecureEmail 
   [encodedEmail]="'grfgOrznvyNpbz'"
   class="text-primary-600 hover:underline">
  {{ 'grfgOrznvyNpbz' | decodeEmail }}
</a>

<!-- HTML renderizado (sin href visible para bots): -->
<a class="text-primary-600 hover:underline">
  test@email.com
</a>
```

#### Importación

```typescript
import { SecureEmailDirective } from '@shared/directives/secure-contact.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SecureEmailDirective, DecodeEmailPipe],
  // ...
})
```

#### Comportamiento

1. **OnInit**: Remueve atributo `href` del elemento
2. **Click**: Intercepta evento, decodifica email, abre `mailto:`
3. **Accesibilidad**: Mantiene apariencia de enlace normal

---

### 📱 SecurePhoneDirective

**Ubicación**: `src/app/shared/directives/secure-contact.directive.ts`

**Selector**: `[appSecurePhone]`

#### Descripción
Directiva que protege enlaces de teléfono removiendo el atributo `href` del HTML y manejando clicks dinámicamente.

#### Propiedades de Entrada

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `encodedPhone` | `string` | Teléfono ofuscado con ROT13 + Base64 |

#### Uso

```html
<!-- Protege enlace de teléfono -->
<a appSecurePhone 
   [encodedPhone]="'KzUx-IDs5OC04Nzg-IjIzNg'"
   class="text-primary-600 hover:underline">
  {{ 'KzUx-IDs5OC04Nzg-IjIzNg' | decodePhone }}
</a>

<!-- HTML renderizado (sin href visible para bots): -->
<a class="text-primary-600 hover:underline">
  +51 998 678 236
</a>
```

#### Importación

```typescript
import { SecurePhoneDirective } from '@shared/directives/secure-contact.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SecurePhoneDirective, DecodePhonePipe],
  // ...
})
```

---

### 🔑 EncodeEmailPipe

**Ubicación**: `src/app/shared/pipes/security.pipe.ts`

**Selector**: `encodeEmail`

#### Descripción
Pipe para codificar emails en templates (uso opcional, principalmente para testing).

#### Uso

```html
<!-- Codifica email -->
<input [value]="'test@email.com' | encodeEmail">
<!-- Output: grfgOrznvyNpbz -->
```

---

### 🔑 EncodePhonePipe

**Ubicación**: `src/app/shared/pipes/security.pipe.ts`

**Selector**: `encodePhone`

#### Descripción
Pipe para codificar teléfonos en templates (uso opcional, principalmente para testing).

#### Uso

```html
<!-- Codifica teléfono -->
<input [value]="'+51 998 678 236' | encodePhone">
<!-- Output: KzUx-IDs5OC04Nzg-IjIzNg -->
```

---

### 📋 Ejemplo Completo de Uso

```typescript
// contact.component.ts
import { Component } from '@angular/core';
import { 
  DecodeEmailPipe, 
  DecodePhonePipe,
  SecureEmailDirective,
  SecurePhoneDirective 
} from '@shared';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    DecodeEmailPipe,
    DecodePhonePipe,
    SecureEmailDirective,
    SecurePhoneDirective
  ],
  template: `
    <div class="contact-info">
      <h2>Contacto</h2>
      
      <!-- Email protegido -->
      <div>
        <span>Email: </span>
        <a appSecureEmail 
           [encodedEmail]="contact.email"
           class="text-primary-600 hover:text-primary-800">
          {{ contact.email | decodeEmail }}
        </a>
      </div>
      
      <!-- Teléfono protegido -->
      <div>
        <span>Teléfono: </span>
        <a appSecurePhone 
           [encodedPhone]="contact.phone"
           class="text-primary-600 hover:text-primary-800">
          {{ contact.phone | decodePhone }}
        </a>
      </div>
    </div>
  `
})
export class ContactComponent {
  contact = {
    email: 'grfgOrznvyNpbz',  // Codificado en data.ts
    phone: 'KzUx-IDs5OC04Nzg-IjIzNg'  // Codificado en data.ts
  };
}
```

**HTML Renderizado:**

```html
<!-- Lo que ven los usuarios (funcional) -->
<div class="contact-info">
  <h2>Contacto</h2>
  <div>
    <span>Email: </span>
    <a class="text-primary-600 hover:text-primary-800">
      test@email.com
    </a>
  </div>
  <div>
    <span>Teléfono: </span>
    <a class="text-primary-600 hover:text-primary-800">
      +51 998 678 236
    </a>
  </div>
</div>

<!-- Lo que ven los bots (sin href, datos ofuscados en JS) -->
```

---

## 🎨 Tailwind Classes Comunes

### Layout

```html
<div class="max-w-6xl mx-auto px-4 py-16">
  <!-- Contenedor centrado con padding -->
</div>
```

### Grid Responsive

```html
<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
  <!-- Grid adaptativo -->
</div>
```

### Cards

```html
<div class="p-5 border rounded-2xl">
  <!-- Card con padding y bordes redondeados -->
</div>
```

### Botones

```html
<a class="px-5 py-3 rounded-xl bg-sky-600 text-white">
  Botón Primario
</a>

<a class="px-5 py-3 rounded-xl border">
  Botón Secundario
</a>
```

---

**Última actualización**: Octubre 2025

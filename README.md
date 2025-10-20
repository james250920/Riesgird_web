# RiesGIRD-ACC / Perú

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![Angular](https://img.shields.io/badge/Angular-19.2.0-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)

Sitio web oficial de la **Red de Instituciones de Educación Superior para la Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático** (RiesGIRD-ACC / Perú).

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes Principales](#-componentes-principales)
- [Configuración](#-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## 🎯 Descripción

La Red RiesGIRD-ACC / Perú es una iniciativa que reúne a universidades peruanas comprometidas con la gestión integral del riesgo de desastres y la adaptación al cambio climático. Este sitio web sirve como plataforma central para:

- **Difundir información** sobre los objetivos y lineamientos de la red
- **Promover eventos** académicos y de capacitación
- **Conectar universidades** e instituciones participantes
- **Facilitar el acceso** a recursos y contactos clave

### Periodos de Liderazgo
- **Perú**: 2024-2027
- **LAC** (Latinoamérica y el Caribe): 2024-2026

## ✨ Características

### Navegación Interactiva
- ✅ **Scroll suave** entre secciones sin cambios de página
- ✅ **Single Page Application** (SPA) con navegación por anclas
- ✅ **Navbar sticky** con indicadores visuales de sección activa
- ✅ **Menú móvil responsivo** con animaciones fluidas

### Secciones Principales
- 🏠 **Inicio**: Presentación de la red con logo y descripción
- 👥 **Consejo Directivo**: Información del equipo de liderazgo 2024-2027
- 📅 **Eventos**: Calendario de eventos académicos y actividades
- 🎯 **Objetivos**: Los 6 objetivos estratégicos de la red
- 📜 **Lineamientos**: Políticas de gestión institucional
- 🎓 **Universidades**: Listado de las 27 universidades participantes
- 📞 **Contacto**: Información de la Secretaría Técnica Nacional

### Diseño y UX
- 🎨 **Diseño moderno** con Tailwind CSS
- 📱 **100% Responsivo** (Mobile-first)
- ♿ **Accesible** (ARIA labels, navegación por teclado)
- 🚀 **Optimizado** para rendimiento (Lazy loading, code splitting)
- 🎭 **Animaciones sutiles** para mejor experiencia de usuario

### 🔐 Seguridad y Protección de Datos
- 🛡️ **Ofuscación de datos sensibles** - Protección contra bots de scraping
- 🔒 **ROT13 + Base64** - Doble capa de encoding para emails y teléfonos
- 🚫 **Protección de enlaces** - Atributos href dinámicos para evitar crawlers
- 👁️ **Decodificación transparente** - Los usuarios ven datos normales
- 🤖 **Anti-bot** - Dificulta recolección automática de contactos

## 🛠 Tecnologías

### Frontend Framework
- **Angular 19.2.0** - Framework principal
- **TypeScript 5.6.0** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva

### Estilos y UI
- **Tailwind CSS 3.4.17** - Framework de CSS utility-first
- **SCSS/Sass** - Preprocesador CSS
- **Autoprefixer** - Compatibilidad cross-browser

### Herramientas de Desarrollo
- **Angular CLI** - Herramientas de línea de comandos
- **Prettier** - Formateo de código
- **Karma & Jasmine** - Testing unitario
- **ESLint** - Linting de código

### Build y Bundling
- **Vite** - Build tool ultra-rápido
- **esbuild** - Bundler de JavaScript/TypeScript
- **PostCSS** - Procesamiento de CSS

## 📦 Requisitos Previos

Antes de instalar, asegúrate de tener:

- **Node.js** >= 18.19.0
- **npm** >= 9.0.0 (o **yarn** / **pnpm**)
- **Git** (para clonar el repositorio)

### Verificar versiones instaladas

```bash
node --version
npm --version
```

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/james250920/Riesgird_web.git
cd Riesgird_web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar entorno (opcional)

Crea un archivo `.env` si necesitas variables de entorno personalizadas.

## 💻 Uso

### Servidor de desarrollo

Inicia el servidor de desarrollo local:

```bash
npm start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo.

### Build de producción

```bash
npm run build
```

Los archivos compilados se generarán en `dist/riesgird-web/`.

### Servidor de producción local

```bash
npm run start:prod
```

### Ejecutar tests

```bash
npm test
```

### Formatear código

```bash
npm run format
```

## 🔐 Sistema de Seguridad

### Protección de Datos Sensibles

La aplicación implementa un sistema de **ofuscación de datos** para proteger información de contacto (emails y teléfonos) contra bots de scraping y recolección automática.

### Arquitectura de Seguridad

```
┌─────────────────────────────────────────────────┐
│  data.ts (Datos Ofuscados)                      │
│  email: "nfzbyybOrfnaNqh" (encoded)             │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  SecurityService                                │
│  - encodeEmail() / decodeEmail()                │
│  - encodePhone() / decodePhone()                │
│  - ROT13 + Base64 encoding                      │
└─────────────────┬───────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
┌───────────────┐   ┌───────────────┐
│ Security Pipes│   │  Directives   │
│ - decodeEmail │   │ - secureEmail │
│ - decodePhone │   │ - securePhone │
└───────────────┘   └───────────────┘
        │                   │
        └─────────┬─────────┘
                  ▼
┌─────────────────────────────────────────────────┐
│  Template (Usuario ve datos normales)           │
│  {{ email | decodeEmail }}                      │
│  <a appSecureEmail [encodedEmail]="email">      │
└─────────────────────────────────────────────────┘
```

### Implementación Técnica

#### 1. SecurityService

Servicio que implementa la lógica de codificación/decodificación:

```typescript
@Injectable({ providedIn: 'root' })
export class SecurityService {
  // Codifica email con ROT13 + Base64
  encodeEmail(email: string): string {
    const rot13 = this.rot13(email);
    return btoa(rot13);
  }

  // Decodifica email
  decodeEmail(encoded: string): string {
    const decoded = atob(encoded);
    return this.rot13(decoded);
  }

  // Implementación ROT13 (cifrado César con rotación 13)
  private rot13(str: string): string {
    return str.replace(/[a-zA-Z0-9]/g, (char) => {
      // Rotación de caracteres
    });
  }
}
```

#### 2. Pipes de Seguridad

Pipes para usar en templates:

```typescript
// Decodifica emails en templates
{{ encodedEmail | decodeEmail }}

// Decodifica teléfonos en templates
{{ encodedPhone | decodePhone }}
```

#### 3. Directivas de Protección

Directivas que protegen enlaces de scraping:

```typescript
// Protege enlaces mailto:
<a appSecureEmail 
   [encodedEmail]="'nfzbyybOrfnaNqh'"
   (click)="handleClick($event)">
  {{ 'nfzbyybOrfnaNqh' | decodeEmail }}
</a>

// Protege enlaces tel:
<a appSecurePhone 
   [encodedPhone]="encodedPhoneNumber"
   (click)="handleClick($event)">
  {{ encodedPhoneNumber | decodePhone }}
</a>
```

### Utilidad de Codificación

Script Node.js para codificar datos:

```bash
# Ejecutar script de codificación
node scripts/encode-data.js
```

```javascript
// scripts/encode-data.js
const contacts = {
  emails: [
    'usuario@dominio.com',
    'contacto@empresa.pe'
  ],
  phones: [
    '+51 998 678 236',
    '998678236'
  ]
};

// Output: datos codificados listos para data.ts
```

### Ventajas del Sistema

| Característica | Beneficio |
|---------------|-----------|
| **ROT13 + Base64** | Doble capa de ofuscación |
| **Transparente** | Usuario ve datos normales |
| **Anti-scraping** | Dificulta bots automáticos |
| **Sin impacto UX** | Clicks funcionan normalmente |
| **Fácil mantenimiento** | Script de codificación incluido |
| **Reversible** | Pipes decodifican al vuelo |

### Uso en Componentes

```typescript
// component.ts
import { DecodeEmailPipe, SecureEmailDirective } from '@shared';

@Component({
  selector: 'app-contact',
  imports: [DecodeEmailPipe, SecureEmailDirective],
  template: `
    <a appSecureEmail 
       [encodedEmail]="contact.email">
      {{ contact.email | decodeEmail }}
    </a>
  `
})
export class ContactComponent {
  contact = {
    email: 'nfzbyybOrfnaNqh' // encoded
  };
}
```

### Consideraciones

⚠️ **Nota**: Este sistema NO es criptografía fuerte. Su propósito es:
- Dificultar scraping básico con regex
- Ocultar datos en código fuente HTML
- Prevenir recolección automática simple
- Mantener accesibilidad para usuarios reales

Para protección de datos críticos, considere sistemas adicionales como:
- CAPTCHA en formularios
- Rate limiting en APIs
- WAF (Web Application Firewall)
- Honeypots anti-bot

## 🔍 SEO y Optimización para Buscadores

### Estrategia SEO Implementada

La aplicación está completamente optimizada para motores de búsqueda con una estrategia multicapa que incluye meta tags, structured data y configuraciones específicas para crawlers.

### Componentes SEO

#### 1. Meta Tags Optimizados

**index.html** incluye meta tags completos para:

- **Meta tags básicos**: title, description, keywords, author
- **Open Graph (Facebook)**: og:title, og:description, og:image, og:url, og:type
- **Twitter Card**: twitter:card, twitter:title, twitter:description, twitter:image
- **Geo tags**: geo.region, geo.placename (Perú)
- **Robots**: index, follow, revisit-after
- **Canonical URL**: Previene contenido duplicado

```html
<!-- Ejemplo de meta tags en index.html -->
<meta name="description" content="Red de 27 universidades peruanas..." />
<meta property="og:title" content="RiesGIRD-ACC Perú" />
<meta property="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://james250920.github.io/Riesgird_web/" />
```

#### 2. Structured Data (Schema.org)

Implementación de **JSON-LD** para datos estructurados:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RiesGIRD-ACC Perú",
  "url": "https://james250920.github.io/Riesgird_web/",
  "logo": "https://james250920.github.io/Riesgird_web/assets/logo.svg",
  "description": "Red de universidades peruanas...",
  "areaServed": "PE",
  "foundingDate": "2024"
}
```

**Tipos de Schema implementados:**
- ✅ Organization (datos de la organización)
- ✅ Event (eventos académicos)
- ✅ EducationalOrganization (universidades miembro)

#### 3. SeoService

Servicio Angular para gestión dinámica de SEO:

```typescript
import { SeoService } from '@shared/services/seo.service';

@Component({ /* ... */ })
export class MyComponent {
  private seoService = inject(SeoService);

  ngOnInit() {
    // Actualizar meta tags dinámicamente
    this.seoService.updateMetaTags({
      title: 'Eventos | RiesGIRD-ACC Perú',
      description: 'Calendario de eventos académicos...',
      keywords: 'eventos, conferencias, capacitación',
      url: 'https://james250920.github.io/Riesgird_web/#eventos'
    });

    // Inyectar structured data
    const eventSchema = this.seoService.generateEventSchema({
      name: 'VII Conferencia Internacional',
      description: 'Evento sobre gestión de riesgos...',
      startDate: '2024-11-15',
      endDate: '2024-11-17',
      location: 'Lima, Perú'
    });
    this.seoService.injectStructuredData(eventSchema, 'event-schema');
  }
}
```

**Métodos disponibles:**
- `updateMetaTags(config)` - Actualizar todos los meta tags
- `updateTitle(title)` - Actualizar título
- `updateDescription(description)` - Actualizar descripción
- `updateCanonicalUrl(url)` - Actualizar URL canónica
- `generateOrganizationSchema()` - Generar schema de organización
- `generateEventSchema(event)` - Generar schema de evento
- `generateEducationalOrganizationSchema(university)` - Schema de universidad
- `injectStructuredData(schema, id)` - Inyectar JSON-LD en DOM
- `resetToDefault()` - Restaurar configuración por defecto

#### 4. robots.txt

**Ubicación**: `public/robots.txt`

```
User-agent: *
Allow: /

# Permitir todos los recursos
Allow: /assets/
Allow: /*.js
Allow: /*.css
Allow: /*.svg

# Bloquear rutas administrativas
Disallow: /admin/
Disallow: /private/

# Sitemap
Sitemap: https://james250920.github.io/Riesgird_web/sitemap.xml
```

#### 5. sitemap.xml

**Ubicación**: `public/sitemap.xml`

Mapa del sitio con todas las secciones:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://james250920.github.io/Riesgird_web/</loc>
    <lastmod>2025-10-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://james250920.github.io/Riesgird_web/#consejo</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... más URLs -->
</urlset>
```

**Secciones incluidas:**
- Página principal (priority 1.0)
- Inicio (priority 0.9)
- Consejo Directivo (priority 0.8)
- Eventos (priority 0.9, changefreq weekly)
- Objetivos (priority 0.8)
- Universidades (priority 0.8)
- Lineamientos (priority 0.7)
- Contacto (priority 0.8)

### Beneficios SEO

| Aspecto | Implementación | Beneficio |
|---------|---------------|-----------|
| **Indexación** | Meta tags + sitemap.xml | Google indexa todas las secciones |
| **Rich Snippets** | JSON-LD Schema.org | Resultados enriquecidos en SERP |
| **Social Media** | Open Graph + Twitter Card | Vista previa atractiva al compartir |
| **Rendimiento** | Preconnect, minificación | Mejor ranking por velocidad |
| **Accesibilidad** | ARIA, semantic HTML | Mejora SEO y UX |
| **Mobile-First** | Responsive design | Google prioriza mobile |
| **Canonical URLs** | Link rel="canonical" | Evita penalización por duplicados |

### Verificación SEO

#### Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Agregar propiedad: `https://james250920.github.io/Riesgird_web/`
3. Verificar propiedad (método HTML tag)
4. Enviar sitemap: `https://james250920.github.io/Riesgird_web/sitemap.xml`

#### Herramientas de Validación

```bash
# Validar sitemap
https://www.xml-sitemaps.com/validate-xml-sitemap.html

# Validar robots.txt
https://www.google.com/webmasters/tools/robots-testing-tool

# Test de datos estructurados
https://search.google.com/test/rich-results

# Test Open Graph
https://www.opengraph.xyz/

# PageSpeed Insights
https://pagespeed.web.dev/
```

### Checklist SEO ✅

- ✅ **Meta tags** completos (title, description, keywords)
- ✅ **Open Graph** para Facebook/LinkedIn
- ✅ **Twitter Card** para Twitter
- ✅ **Structured Data** con JSON-LD
- ✅ **Sitemap.xml** actualizado
- ✅ **Robots.txt** configurado
- ✅ **Canonical URLs** implementadas
- ✅ **Alt text** en imágenes
- ✅ **Semantic HTML** (header, nav, main, footer, section)
- ✅ **Responsive design** (mobile-first)
- ✅ **Performance optimizado** (Vite, code splitting)
- ✅ **HTTPS** (GitHub Pages)
- ✅ **Clean URLs** (sin parámetros innecesarios)

### Mejoras Futuras

- 📊 **Google Analytics** - Tracking de visitas
- 🎯 **Google Tag Manager** - Gestión de tags
- 📈 **Search Console Integration** - Monitoreo de indexación
- 🌐 **Multi-idioma** - English version con hreflang
- 📝 **Blog section** - Contenido actualizado regularmente
- 🔗 **Backlinks** - Enlaces desde universidades miembro



## 📂 Estructura del Proyecto

```
Riesgird_web/
├── docs/                          # Documentación y sitio desplegado
├── public/                        # Assets públicos
│   ├── favicon.ico
│   └── assets/
│       ├── eventos/               # Imágenes de eventos
│       │   ├── conferenciaVII.png
│       │   └── README.md
│       └── logo.svg
├── src/
│   ├── app/
│   │   ├── components/            # Componentes reutilizables
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar/
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   ├── pages/                 # Páginas/vistas principales
│   │   │   ├── contact/           # Página de contacto
│   │   │   ├── council/           # Consejo directivo
│   │   │   ├── event/             # Eventos
│   │   │   ├── home/              # Página principal
│   │   │   ├── objectives/        # Objetivos
│   │   │   ├── policies/          # Lineamientos
│   │   │   └── universities/      # Universidades
│   │   ├── shared/                # Código compartido
│   │   │   ├── components/
│   │   │   │   ├── base-component.directive.ts
│   │   │   │   ├── confirm-dialog/
│   │   │   │   └── loading-spinner/
│   │   │   ├── interfaces/
│   │   │   │   └── common.interface.ts
│   │   │   ├── modules/
│   │   │   │   └── shared.module.ts
│   │   │   ├── pipes/
│   │   │   │   └── truncate.pipe.ts
│   │   │   ├── services/
│   │   │   │   ├── app-state.service.ts
│   │   │   │   └── navigation.service.ts
│   │   │   └── index.ts
│   │   ├── app.config.server.ts   # Configuración SSR
│   │   ├── app.config.ts          # Configuración principal
│   │   ├── app.html               # Template principal
│   │   ├── app.routes.server.ts   # Rutas SSR
│   │   ├── app.routes.ts          # Definición de rutas
│   │   ├── app.scss               # Estilos del componente raíz
│   │   ├── app.spec.ts            # Tests del componente raíz
│   │   ├── app.ts                 # Componente raíz
│   │   └── data.ts                # Datos estáticos de la aplicación
│   ├── assets/                    # Assets de src
│   │   └── logo.svg
│   ├── environments/              # Configuración por entorno
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html                 # HTML principal
│   ├── main.server.ts             # Entry point del servidor
│   ├── main.ts                    # Entry point del navegador
│   ├── server.ts                  # Configuración del servidor Express
│   └── styles.scss                # Estilos globales
├── .editorconfig                  # Configuración del editor
├── .gitignore                     # Archivos ignorados por Git
├── angular.json                   # Configuración de Angular CLI
├── package.json                   # Dependencias y scripts
├── README.md                      # Este archivo
├── tailwind.config.js             # Configuración de Tailwind CSS
├── tsconfig.app.json              # Config TypeScript para la app
├── tsconfig.json                  # Config TypeScript base
├── tsconfig.spec.json             # Config TypeScript para tests
└── vite.config.js                 # Configuración de Vite
```

## 🧩 Componentes Principales

### Componentes de Layout

#### Navbar (`app/components/navbar`)
- **Propósito**: Barra de navegación superior sticky
- **Características**:
  - Scroll suave a secciones con anclas (#)
  - Menú responsive con toggle móvil
  - Auto-cierre al seleccionar opción
  - Navegación por teclado (Escape para cerrar)

#### Footer (`app/components/footer`)
- **Propósito**: Pie de página con información de contacto
- **Contenido**:
  - Descripción de la red
  - Datos de la Secretaría Técnica
  - Periodos de liderazgo
  - Enlaces útiles

### Páginas/Vistas

#### Home (`app/pages/home`)
- **Ruta**: `/` (raíz)
- **Componente**: Single Page con todas las secciones
- **Secciones incluidas**:
  - Hero con logo y descripción
  - Bloques de liderazgo (Perú y LAC)
  - Consejo Directivo
  - Eventos
  - Objetivos
  - Universidades
  - Lineamientos/Políticas
  - Contacto

#### Council (`app/pages/council`)
- **Selector**: `<app-council>`
- **ID de sección**: `#consejo`
- **Contenido**: Consejo Directivo 2024-2027 con presidente, secretario y vocal

#### Events (`app/pages/event`)
- **Selector**: `<app-events>`
- **ID de sección**: `#eventos`
- **Características**:
  - Sistema de filtros (Todos, Próximos, Finalizados)
  - Cards con imágenes
  - Estado visual de eventos
  - Enlaces de inscripción
  - Información de contacto

#### Objectives (`app/pages/objectives`)
- **Selector**: `<app-objectives>`
- **ID de sección**: `#objetivos`
- **Contenido**: Lista numerada de los 6 objetivos estratégicos

#### Universities (`app/pages/universities`)
- **Selector**: `<app-universities>`
- **ID de sección**: `#universidades`
- **Contenido**: Grid responsive con 27 universidades participantes

#### Policies (`app/pages/policies`)
- **Selector**: `<app-policies>`
- **ID de sección**: `#politicas`
- **Contenido**: 7 lineamientos de gestión institucional

#### Contact (`app/pages/contact`)
- **Selector**: `<app-contact>`
- **ID de sección**: `#contacto`
- **Información**:
  - Secretaría Técnica Nacional
  - Correos electrónicos
  - Teléfono de contacto

### Servicios

#### NavigationService (`shared/services/navigation.service.ts`)
- **Propósito**: Gestionar la navegación de la aplicación
- **Funcionalidades**:
  - Items de navegación principal (con anclas #)
  - Items de navegación del footer
  - Enlaces externos útiles
  - Verificación de rutas activas

#### AppStateService (`shared/services/app-state.service.ts`)
- **Propósito**: Gestionar el estado global de la aplicación
- **Estado**:
  - Loading state
  - Error handling
  - Theme preferences
  - User data

### Interfaces Compartidas

Ubicadas en `shared/interfaces/common.interface.ts`:

- `BaseComponent` - Base para componentes
- `NavigationItem` - Items de menú/navegación
- `PageMeta` - Metadatos de página
- `ContactInfo` - Información de contacto
- `Address` - Direcciones
- Y más...

## ⚙️ Configuración

### Angular Configuration (`angular.json`)

```json
{
  "projects": {
    "riesgird-web": {
      "projectType": "application",
      "sourceRoot": "src",
      "prefix": "app"
    }
  }
}
```

### Tailwind Configuration (`tailwind.config.js`)

Configuración personalizada con:
- Colores de marca (sky/blue palette)
- Tipografía Inter
- Espaciados personalizados
- Animaciones custom
- Plugins: aspect-ratio, forms, typography

### TypeScript Configuration (`tsconfig.json`)

- **Target**: ES2022
- **Module**: ES2022
- **Strict mode**: Habilitado
- **Angular compiler options**: Configuradas

### Vite Configuration (`vite.config.js`)

```javascript
{
  base: '/Riesgird_web/',
  server: {
    port: 4200,
    host: '0.0.0.0'
  }
}
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia servidor de desarrollo en puerto 4200 |
| `npm run start:prod` | Servidor en modo producción |
| `npm run build` | Build optimizado para producción |
| `npm run build:dev` | Build de desarrollo |
| `npm run build:analyze` | Build con análisis de bundle |
| `npm run watch` | Build en modo watch |
| `npm test` | Ejecuta tests unitarios |
| `npm run test:ci` | Tests en modo CI (headless) |
| `npm run lint` | Verifica código con linter |
| `npm run format` | Formatea código con Prettier |
| `npm run format:check` | Verifica formato sin modificar |
| `npm run clean` | Limpia dist y cache |
| `npm run deps:check` | Verifica dependencias desactualizadas |
| `npm run deps:update` | Actualiza dependencias |

## 🚀 Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages:

1. **Build de producción**:
```bash
npm run build
```

2. Los archivos se generan en `dist/riesgird-web/browser/`

3. **Desplegar a GitHub Pages**:
```bash
# Copia los archivos de build a la carpeta docs/
cp -r dist/riesgird-web/browser/* docs/

# Commit y push
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

4. Configura GitHub Pages en la configuración del repositorio para usar la carpeta `/docs` de la rama `main`.

### URL de Producción
[https://james250920.github.io/Riesgird_web/](https://james250920.github.io/Riesgird_web/)

### Consideraciones de Despliegue

- **Base href**: Configurado como `/Riesgird_web/` para GitHub Pages
- **Assets**: Deben estar en la carpeta `public/` para ser copiados correctamente
- **Rutas**: Usa scroll con anclas (#) para navegación sin cambios de página
- **SEO**: Incluye meta tags apropiados en `index.html`

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Estilo

- **TypeScript**: Sigue las reglas de ESLint configuradas
- **Formato**: Usa Prettier (`npm run format`)
- **Commits**: Mensajes descriptivos en español o inglés
- **Componentes**: Usa standalone components de Angular
- **CSS**: Prioriza utility classes de Tailwind

### Estructura de Commits

```
tipo(scope): descripción corta

Descripción más detallada si es necesaria

- Lista de cambios
- Otro cambio
```

**Tipos**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 📄 Licencia

Este proyecto es propiedad de la **Red RiesGIRD-ACC / Perú**. Todos los derechos reservados.

## 👥 Contacto

**Secretaría Técnica Nacional**
- **Responsable**: Mary Mollo Medina
- **Email**: mmollo@esan.edu.pe
- **Email de la Red**: red_riesgird-acc_pe@esan.edu.pe
- **Teléfono**: +51 998 678 236
- **Institución**: Universidad ESAN

---

## 🌟 Créditos

Desarrollado con ❤️ para la **Red de Instituciones de Educación Superior para la Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático**.

### Universidad ESAN
**Presidente del Consejo Directivo**  
Dr. Jaime Serida Nishimura - Rector

---

**Última actualización**: Octubre 2025  
**Versión**: 0.0.0

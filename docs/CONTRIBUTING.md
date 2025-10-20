# Guía de Contribución - RiesGIRD-ACC / Perú

¡Gracias por tu interés en contribuir al proyecto! Esta guía te ayudará a comenzar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#-código-de-conducta)
- [Cómo Contribuir](#-cómo-contribuir)
- [Configuración del Entorno](#-configuración-del-entorno)
- [Flujo de Trabajo](#-flujo-de-trabajo)
- [Estándares de Código](#-estándares-de-código)
- [Commits y Pull Requests](#-commits-y-pull-requests)
- [Reportar Bugs](#-reportar-bugs)
- [Solicitar Features](#-solicitar-features)

## 📜 Código de Conducta

### Nuestro Compromiso

Nos comprometemos a hacer de la participación en este proyecto una experiencia libre de acoso para todos, independientemente de:

- Edad
- Tamaño corporal
- Discapacidad
- Etnia
- Identidad y expresión de género
- Nivel de experiencia
- Nacionalidad
- Apariencia personal
- Raza
- Religión
- Identidad y orientación sexual

### Comportamiento Esperado

- ✅ Ser respetuoso con diferentes puntos de vista
- ✅ Aceptar críticas constructivas
- ✅ Enfocarse en lo mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros

### Comportamiento Inaceptable

- ❌ Lenguaje o imágenes sexualizadas
- ❌ Comentarios insultantes o despectivos
- ❌ Acoso público o privado
- ❌ Publicar información privada sin permiso
- ❌ Cualquier conducta que sería inapropiada en un entorno profesional

## 🤝 Cómo Contribuir

### Tipos de Contribuciones

Valoramos todas las contribuciones, incluyendo:

1. **Código**
   - Nuevas características
   - Corrección de bugs
   - Mejoras de rendimiento
   - Refactorización

2. **Documentación**
   - Correcciones de typos
   - Mejoras de claridad
   - Nuevos ejemplos
   - Traducciones

3. **Diseño**
   - Mejoras de UI/UX
   - Nuevos componentes
   - Accesibilidad

4. **Testing**
   - Tests unitarios
   - Tests de integración
   - Tests E2E

5. **Reportes**
   - Bugs encontrados
   - Sugerencias de mejora
   - Feedback de usuario

## 🛠️ Configuración del Entorno

### Requisitos

- Node.js >= 18.19.0
- npm >= 9.0.0
- Git
- Editor de código (recomendado: VS Code)

### Instalación

1. **Fork del repositorio**

Haz clic en el botón "Fork" en GitHub.

2. **Clonar tu fork**

```bash
git clone https://github.com/TU_USUARIO/Riesgird_web.git
cd Riesgird_web
```

3. **Agregar remote upstream**

```bash
git remote add upstream https://github.com/james250920/Riesgird_web.git
```

4. **Instalar dependencias**

```bash
npm install
```

5. **Iniciar servidor de desarrollo**

```bash
npm start
```

Navega a `http://localhost:4200/`

### Extensiones Recomendadas para VS Code

```json
{
  "recommendations": [
    "angular.ng-template",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

Crea `.vscode/extensions.json` con el contenido anterior.

### Configuración de VS Code

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## 🔄 Flujo de Trabajo

### 1. Sincronizar con Upstream

Antes de comenzar, sincroniza tu fork:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Crear una Rama

```bash
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/nombre-bug
```

**Convención de nombres de ramas:**

```
feature/  - Nueva funcionalidad
fix/      - Corrección de bug
docs/     - Documentación
style/    - Cambios de estilos (CSS/SCSS)
refactor/ - Refactorización
test/     - Tests
chore/    - Tareas de mantenimiento
```

### 3. Hacer Cambios

- Escribe código limpio y legible
- Sigue las convenciones del proyecto
- Agrega tests si es aplicable
- Actualiza documentación si es necesario

### 4. Probar Cambios

```bash
# Tests unitarios
npm test

# Linting
npm run lint

# Build
npm run build

# Formateo
npm run format
```

### 5. Commit

Sigue la convención de commits (ver sección siguiente).

```bash
git add .
git commit -m "feat: agregar filtro de eventos por fecha"
```

### 6. Push

```bash
git push origin feature/nombre-descriptivo
```

### 7. Pull Request

1. Ve a tu fork en GitHub
2. Haz clic en "Pull Request"
3. Completa la plantilla de PR
4. Espera revisión

## 💻 Estándares de Código

### TypeScript

#### Convenciones de Nomenclatura

```typescript
// Clases: PascalCase
class EventsComponent { }

// Interfaces: PascalCase
interface NavigationItem { }

// Variables y funciones: camelCase
const eventos = [];
function filtrarEventos() { }

// Constantes: UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';

// Privadas: _camelCase
private _isMenuOpen = signal(false);
```

#### Tipos y Interfaces

Prefiere interfaces sobre tipos para objetos:

```typescript
// ✅ Bueno
interface User {
  readonly name: string;
  readonly email: string;
}

// ❌ Evitar (usar type solo para unions, intersections)
type User = {
  name: string;
  email: string;
}
```

#### Readonly

Usa `readonly` para propiedades inmutables:

```typescript
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}
```

#### Async/Await

Prefiere async/await sobre Promises encadenadas:

```typescript
// ✅ Bueno
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// ❌ Evitar
function fetchData() {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}
```

### Angular

#### Componentes Standalone

Todos los componentes deben ser standalone:

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, OtherComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent { }
```

#### Signals

Usa Signals para estado reactivo:

```typescript
// ✅ Bueno
private readonly _count = signal(0);
public readonly count = computed(() => this._count());

increment() {
  this._count.update(c => c + 1);
}

// ❌ Evitar (BehaviorSubject cuando Signal es suficiente)
private count$ = new BehaviorSubject(0);
```

#### Inyección de Dependencias

Usa `inject()` en lugar de constructor injection:

```typescript
// ✅ Bueno
export class MyComponent {
  private readonly router = inject(Router);
  private readonly service = inject(MyService);
}

// ❌ Evitar (constructor injection es verbose)
export class MyComponent {
  constructor(
    private router: Router,
    private service: MyService
  ) {}
}
```

#### Templates

```html
<!-- ✅ Bueno: Control flow syntax -->
@if (isVisible) {
  <div>Contenido</div>
}

@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

<!-- ❌ Evitar: Directivas antiguas -->
<div *ngIf="isVisible">Contenido</div>
<div *ngFor="let item of items">{{ item.name }}</div>
```

### SCSS

#### Estructura

```scss
// Importaciones
@import 'variables';

// Componente base
.componente {
  // Propiedades del componente
  
  // Elementos (BEM)
  &__elemento {
    // Propiedades del elemento
    
    // Modificadores
    &--modificador {
      // Propiedades del modificador
    }
  }
  
  // Estados
  &:hover { }
  &.active { }
  
  // Media queries al final
  @media (max-width: 768px) { }
}
```

#### Variables y Mixins

```scss
// Variables
$primary-color: #0ea5e9;
$transition: 200ms ease-in-out;

// Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Tailwind CSS

#### Orden de Clases

Sigue este orden para consistencia:

```html
<div class="
  <!-- Layout -->
  flex flex-col items-center justify-center
  
  <!-- Spacing -->
  p-4 mx-auto
  
  <!-- Sizing -->
  w-full max-w-6xl
  
  <!-- Typography -->
  text-lg font-semibold
  
  <!-- Colors -->
  text-gray-900 bg-white
  
  <!-- Borders -->
  border border-gray-200 rounded-xl
  
  <!-- Effects -->
  shadow-md hover:shadow-lg
  
  <!-- Transitions -->
  transition-all duration-200
">
```

#### Clases Personalizadas

Crea clases personalizadas en `styles.scss` para patrones repetitivos:

```scss
@layer components {
  .btn-primary {
    @apply px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors;
  }
}
```

## 📝 Commits y Pull Requests

### Convención de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<scope>): <descripción corta>

<descripción larga opcional>

<footer opcional>
```

#### Tipos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan lógica)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento
- `perf`: Mejoras de rendimiento

#### Ejemplos

```bash
feat(events): agregar filtro por categoría

Se agrega un nuevo filtro que permite buscar eventos
por categoría (Académico, Taller, Conferencia).

Closes #42
```

```bash
fix(navbar): corregir scroll en iOS Safari

El scroll suave no funcionaba en iOS Safari debido a
la falta de soporte para scrollIntoView con options.
Se implementa polyfill.

Fixes #38
```

```bash
docs(readme): actualizar instrucciones de instalación
```

```bash
style(home): ajustar espaciado en hero section
```

### Pull Request Template

Crea `.github/PULL_REQUEST_TEMPLATE.md`:

```markdown
## Descripción

Describe los cambios realizados y la motivación detrás de ellos.

## Tipo de cambio

- [ ] Bug fix (cambio que corrige un issue)
- [ ] New feature (cambio que agrega funcionalidad)
- [ ] Breaking change (fix o feature que causa cambios incompatibles)
- [ ] Documentation update

## ¿Cómo ha sido probado?

Describe las pruebas que realizaste.

- [ ] Tests unitarios
- [ ] Tests manuales
- [ ] Tests en diferentes navegadores

## Checklist

- [ ] Mi código sigue las convenciones del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código donde es necesario
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevos warnings
- [ ] He agregado tests que prueban mi fix/feature
- [ ] Los tests existentes pasan localmente
- [ ] He verificado que el build funciona

## Screenshots (si aplica)

Agrega screenshots que muestren los cambios visuales.

## Issues relacionados

Closes #(issue)
```

### Revisión de Código

#### Para Autores

- Mantén PRs pequeños y enfocados
- Responde rápidamente a comentarios
- No tomes críticas personalmente
- Solicita ayuda si la necesitas

#### Para Revisores

- Sé constructivo y específico
- Señala lo que está bien, no solo lo malo
- Sugiere alternativas cuando sea posible
- Aprueba cuando esté listo

## 🐛 Reportar Bugs

### Antes de Reportar

1. Verifica que el bug no esté ya reportado
2. Asegúrate de estar usando la última versión
3. Intenta reproducir el bug de forma consistente

### Plantilla de Bug Report

Crea `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Reportar un bug
title: '[BUG] '
labels: bug
assignees: ''
---

## Descripción del Bug

Descripción clara y concisa del bug.

## Pasos para Reproducir

1. Ir a '...'
2. Hacer clic en '...'
3. Scroll hasta '...'
4. Ver error

## Comportamiento Esperado

Descripción de lo que debería ocurrir.

## Comportamiento Actual

Descripción de lo que ocurre actualmente.

## Screenshots

Si aplica, agrega screenshots.

## Entorno

- OS: [e.g. Windows 10, macOS 12]
- Navegador: [e.g. Chrome 120, Firefox 121]
- Versión de Node: [e.g. 18.19.0]
- Versión del proyecto: [e.g. 0.0.0]

## Información Adicional

Cualquier contexto adicional sobre el problema.

## Logs de Error

```
Pega aquí cualquier error de consola
```
```

## ✨ Solicitar Features

### Plantilla de Feature Request

Crea `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature Request
about: Sugerir una nueva funcionalidad
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

## Descripción de la Funcionalidad

Descripción clara y concisa de la funcionalidad deseada.

## Problema a Resolver

Explica qué problema resuelve esta funcionalidad.

## Solución Propuesta

Describe la solución que te gustaría ver implementada.

## Alternativas Consideradas

Describe alternativas que hayas considerado.

## Información Adicional

Contexto adicional, screenshots, mockups, etc.

## ¿Estarías dispuesto a trabajar en esto?

- [ ] Sí, puedo implementarlo
- [ ] Sí, con guía
- [ ] No, solo es una sugerencia
```

## 📚 Recursos Adicionales

### Documentación

- [README.md](../README.md) - Información general
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura del proyecto
- [COMPONENTS.md](./COMPONENTS.md) - Guía de componentes

### Enlaces Útiles

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)

### Comunidad

- **Issues**: [GitHub Issues](https://github.com/james250920/Riesgird_web/issues)
- **Discussions**: [GitHub Discussions](https://github.com/james250920/Riesgird_web/discussions)
- **Email**: red_riesgird-acc_pe@esan.edu.pe

## 🎓 Primeros Pasos para Nuevos Contribuidores

### Issues "Good First Issue"

Busca issues etiquetados con `good-first-issue` para comenzar.

### Mentoreo

Si necesitas ayuda, no dudes en:

1. Comentar en el issue
2. Abrir una discusión
3. Contactar por email

## ⚖️ Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la misma licencia del proyecto.

---

¡Gracias por contribuir a RiesGIRD-ACC / Perú! 🎉

**Última actualización**: Octubre 2025

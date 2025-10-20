import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * Interfaz para configuración de meta tags
 */
export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

/**
 * Servicio para gestión de SEO y meta tags
 * Proporciona métodos para actualizar dinámicamente los meta tags
 * para mejorar la indexación y compartir en redes sociales
 */
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  // Configuración por defecto
  private readonly defaultConfig: SeoConfig = {
    title: 'RiesGIRD-ACC Perú | Red de Gestión Integral del Riesgo de Desastres',
    description: 'Red de Instituciones de Educación Superior para la Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático en Perú. 27 universidades comprometidas con la prevención y mitigación de desastres.',
    keywords: 'RiesGIRD, gestión de riesgos, desastres, cambio climático, universidades Perú, prevención desastres, adaptación climática, educación superior, riesgo de desastres, resilencia',
    image: 'https://james250920.github.io/Riesgird_web/assets/logo.svg',
    url: 'https://james250920.github.io/Riesgird_web/',
    type: 'website',
    author: 'RiesGIRD-ACC Perú'
  };

  /**
   * Actualiza todos los meta tags con la configuración proporcionada
   * Si no se proporciona un valor, usa el valor por defecto
   */
  updateMetaTags(config: SeoConfig): void {
    const finalConfig = { ...this.defaultConfig, ...config };

    // Actualizar título
    if (finalConfig.title) {
      this.updateTitle(finalConfig.title);
    }

    // Actualizar meta tags básicos
    if (finalConfig.description) {
      this.updateDescription(finalConfig.description);
    }

    if (finalConfig.keywords) {
      this.updateKeywords(finalConfig.keywords);
    }

    if (finalConfig.author) {
      this.updateAuthor(finalConfig.author);
    }

    // Actualizar Open Graph
    this.updateOpenGraph(finalConfig);

    // Actualizar Twitter Card
    this.updateTwitterCard(finalConfig);

    // Actualizar URL canónica
    if (finalConfig.url) {
      this.updateCanonicalUrl(finalConfig.url);
    }
  }

  /**
   * Actualiza el título de la página
   */
  updateTitle(title: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title });
  }

  /**
   * Actualiza la descripción
   */
  updateDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  /**
   * Actualiza las palabras clave
   */
  updateKeywords(keywords: string): void {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  /**
   * Actualiza el autor
   */
  updateAuthor(author: string): void {
    this.meta.updateTag({ name: 'author', content: author });
  }

  /**
   * Actualiza los meta tags de Open Graph (Facebook)
   */
  private updateOpenGraph(config: SeoConfig): void {
    this.meta.updateTag({ property: 'og:title', content: config.title || '' });
    this.meta.updateTag({ property: 'og:description', content: config.description || '' });
    this.meta.updateTag({ property: 'og:image', content: config.image || '' });
    this.meta.updateTag({ property: 'og:url', content: config.url || '' });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
  }

  /**
   * Actualiza los meta tags de Twitter Card
   */
  private updateTwitterCard(config: SeoConfig): void {
    this.meta.updateTag({ property: 'twitter:title', content: config.title || '' });
    this.meta.updateTag({ property: 'twitter:description', content: config.description || '' });
    this.meta.updateTag({ property: 'twitter:image', content: config.image || '' });
    this.meta.updateTag({ property: 'twitter:url', content: config.url || '' });
  }

  /**
   * Actualiza la URL canónica
   */
  updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
  }

  /**
   * Genera structured data JSON-LD para Schema.org
   */
  generateOrganizationSchema(): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'RiesGIRD-ACC Perú',
      'alternateName': 'Red de Instituciones de Educación Superior para la Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático',
      'url': this.defaultConfig.url,
      'logo': this.defaultConfig.image,
      'description': this.defaultConfig.description,
      'areaServed': 'PE',
      'foundingDate': '2024',
      'memberOf': {
        '@type': 'Organization',
        'name': 'RiesGIRD-ACC LAC'
      }
    });
  }

  /**
   * Genera structured data para eventos
   */
  generateEventSchema(eventData: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    image?: string;
  }): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Event',
      'name': eventData.name,
      'description': eventData.description,
      'startDate': eventData.startDate,
      'endDate': eventData.endDate,
      'location': {
        '@type': 'Place',
        'name': eventData.location,
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'PE'
        }
      },
      'image': eventData.image || this.defaultConfig.image,
      'organizer': {
        '@type': 'Organization',
        'name': 'RiesGIRD-ACC Perú',
        'url': this.defaultConfig.url
      }
    });
  }

  /**
   * Genera structured data para lista de universidades
   */
  generateEducationalOrganizationSchema(university: {
    name: string;
    url?: string;
    location?: string;
  }): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': university.name,
      'url': university.url || '',
      'location': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'PE',
          'addressRegion': university.location || 'Perú'
        }
      },
      'memberOf': {
        '@type': 'Organization',
        'name': 'RiesGIRD-ACC Perú'
      }
    });
  }

  /**
   * Inyecta structured data en el DOM
   */
  injectStructuredData(schema: string, id: string = 'structured-data'): void {
    // Remover schema anterior si existe
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Crear nuevo script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = schema;
    document.head.appendChild(script);
  }

  /**
   * Restaura los meta tags por defecto
   */
  resetToDefault(): void {
    this.updateMetaTags(this.defaultConfig);
  }

  /**
   * Obtiene la configuración actual
   */
  getCurrentConfig(): SeoConfig {
    return {
      title: this.title.getTitle(),
      description: this.meta.getTag('name="description"')?.content,
      keywords: this.meta.getTag('name="keywords"')?.content,
      image: this.meta.getTag('property="og:image"')?.content,
      url: this.meta.getTag('property="og:url"')?.content,
      type: this.meta.getTag('property="og:type"')?.content,
      author: this.meta.getTag('name="author"')?.content
    };
  }
}

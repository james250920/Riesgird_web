/**
 * Configuración de ambiente para producción
 */
export const environment = {
  production: true,
  name: 'production',
  apiUrl: 'https://api.riesgird-acc.pe/api',
  enableDevTools: false,
  logLevel: 'error',
  features: {
    analytics: true,
    errorReporting: true,
    performanceMonitoring: true,
  },
  cache: {
    ttl: 30 * 60 * 1000, // 30 minutos en producción
  },
  build: {
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  },
};

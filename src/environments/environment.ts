/**
 * Configuración de ambiente para desarrollo
 */
export const environment = {
  production: false,
  name: 'development',
  apiUrl: 'http://localhost:3000/api',
  enableDevTools: true,
  logLevel: 'debug',
  features: {
    analytics: false,
    errorReporting: false,
    performanceMonitoring: true,
  },
  cache: {
    ttl: 5 * 60 * 1000, // 5 minutos en desarrollo
  },
  build: {
    timestamp: new Date().toISOString(),
    version: '1.0.0-dev',
  }
};

import { Pipe, PipeTransform, inject } from '@angular/core';
import { SecurityService } from '../services/security.service';

/**
 * Pipe para decodificar emails ofuscados
 * Uso: {{ encodedEmail | decodeEmail }}
 */
@Pipe({
  name: 'decodeEmail',
  standalone: true,
})
export class DecodeEmailPipe implements PipeTransform {
  private readonly securityService = inject(SecurityService);

  transform(encoded: string): string {
    return this.securityService.decodeEmail(encoded);
  }
}

/**
 * Pipe para decodificar teléfonos ofuscados
 * Uso: {{ encodedPhone | decodePhone }}
 */
@Pipe({
  name: 'decodePhone',
  standalone: true,
})
export class DecodePhonePipe implements PipeTransform {
  private readonly securityService = inject(SecurityService);

  transform(encoded: string, format: boolean = true): string {
    const decoded = this.securityService.decodePhone(encoded);
    return format ? this.securityService.formatPhone(decoded) : decoded;
  }
}

/**
 * Pipe para ofuscar emails en runtime (opcional)
 * Uso: {{ email | encodeEmail }}
 */
@Pipe({
  name: 'encodeEmail',
  standalone: true,
})
export class EncodeEmailPipe implements PipeTransform {
  private readonly securityService = inject(SecurityService);

  transform(email: string): string {
    return this.securityService.encodeEmail(email);
  }
}

/**
 * Pipe para ofuscar teléfonos en runtime (opcional)
 * Uso: {{ phone | encodePhone }}
 */
@Pipe({
  name: 'encodePhone',
  standalone: true,
})
export class EncodePhonePipe implements PipeTransform {
  private readonly securityService = inject(SecurityService);

  transform(phone: string): string {
    return this.securityService.encodePhone(phone);
  }
}

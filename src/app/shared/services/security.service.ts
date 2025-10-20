import { Injectable } from '@angular/core';

/**
 * Servicio para proteger datos sensibles contra scraping de bots
 * Implementa técnicas de ofuscación y codificación
 */
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  /**
   * Codifica un email usando Base64 ROT13
   * Esto dificulta el scraping automático
   */
  encodeEmail(email: string): string {
    // Aplicar ROT13 primero
    const rot13 = this.rot13(email);
    // Luego Base64
    return btoa(rot13);
  }

  /**
   * Decodifica un email ofuscado
   */
  decodeEmail(encoded: string): string {
    try {
      // Decodificar Base64
      const decoded = atob(encoded);
      // Revertir ROT13
      return this.rot13(decoded);
    } catch (e) {
      console.error('Error decoding email', e);
      return '';
    }
  }

  /**
   * Codifica un número de teléfono
   */
  encodePhone(phone: string): string {
    // Remover espacios y caracteres especiales
    const cleanPhone = phone.replace(/\s+/g, '');
    // Aplicar ROT13 y Base64
    return btoa(this.rot13(cleanPhone));
  }

  /**
   * Decodifica un número de teléfono
   */
  decodePhone(encoded: string): string {
    try {
      const decoded = atob(encoded);
      return this.rot13(decoded);
    } catch (e) {
      console.error('Error decoding phone', e);
      return '';
    }
  }

  /**
   * Formatea un teléfono decodificado para mostrar
   */
  formatPhone(phone: string): string {
    // Si comienza con +51, formato peruano
    if (phone.startsWith('+51')) {
      const number = phone.substring(3);
      if (number.length === 9) {
        return `+51 ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6)}`;
      }
    }
    return phone;
  }

  /**
   * ROT13 cipher - cada letra se reemplaza por la letra 13 posiciones adelante
   * Números también se rotan (ROT5)
   */
  private rot13(str: string): string {
    return str.replace(/[a-zA-Z0-9]/g, (char) => {
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
      } else if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      } else if (char >= '0' && char <= '9') {
        return String.fromCharCode(((char.charCodeAt(0) - 48 + 5) % 10) + 48);
      }
      return char;
    });
  }

  /**
   * Genera un evento de click para enlaces de email
   * Evita que el email esté en el HTML como texto plano
   */
  handleEmailClick(encoded: string, event?: Event): void {
    event?.preventDefault();
    const email = this.decodeEmail(encoded);
    window.location.href = `mailto:${email}`;
  }

  /**
   * Genera un evento de click para enlaces de teléfono
   */
  handlePhoneClick(encoded: string, event?: Event): void {
    event?.preventDefault();
    const phone = this.decodePhone(encoded);
    window.location.href = `tel:${phone}`;
  }

  /**
   * Verifica si un string es un email válido
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Verifica si un string es un teléfono válido
   */
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(phone);
  }
}

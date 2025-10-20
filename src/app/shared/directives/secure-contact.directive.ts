import { Directive, Input, HostListener, ElementRef, inject, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';

/**
 * Directiva para proteger enlaces de email
 * Uso: <a appSecureEmail [encodedEmail]="encodedEmailString">Email</a>
 */
@Directive({
  selector: '[appSecureEmail]',
  standalone: true,
})
export class SecureEmailDirective implements OnInit {
  @Input() encodedEmail!: string;

  private readonly el = inject(ElementRef);
  private readonly securityService = inject(SecurityService);

  ngOnInit(): void {
    // Prevenir que el href sea visible en el HTML
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.removeAttribute('href');
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.securityService.handleEmailClick(this.encodedEmail, event);
  }
}

/**
 * Directiva para proteger enlaces de teléfono
 * Uso: <a appSecurePhone [encodedPhone]="encodedPhoneString">Teléfono</a>
 */
@Directive({
  selector: '[appSecurePhone]',
  standalone: true,
})
export class SecurePhoneDirective implements OnInit {
  @Input() encodedPhone!: string;

  private readonly el = inject(ElementRef);
  private readonly securityService = inject(SecurityService);

  ngOnInit(): void {
    // Prevenir que el href sea visible en el HTML
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.removeAttribute('href');
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.securityService.handlePhoneClick(this.encodedPhone, event);
  }
}

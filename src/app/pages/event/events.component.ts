import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RIES_INFO } from '../../data';
@Component({
  selector: "app-events",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent {
  eventos = RIES_INFO.eventos;
  eventosFiltrados = this.eventos;
  filtroSeleccionado: string = 'todos';

  constructor() {}

  filtrarEventos(filtro: string) {
    this.filtroSeleccionado = filtro;

    if (filtro === 'todos') {
      this.eventosFiltrados = this.eventos;
    } else {
      this.eventosFiltrados = this.eventos.filter(evento => evento.estado.toLowerCase() === filtro.toLowerCase());
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  getEstadoColor(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'próximo':
        return 'bg-green-100 text-green-800';
      case 'finalizado':
        return 'bg-gray-100 text-gray-800';
      case 'en curso':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  formatearFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    return fechaObj.toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}



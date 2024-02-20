import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnosListaComponent } from './Alumnos/AlumnosLista.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',  
  standalone: true,  
  imports: [CommonModule, RouterOutlet, AlumnosListaComponent, HttpClientModule],
  template: `<lista-alumnos></lista-alumnos>`,
})
export class AppComponent {
  title = 'PracticaExamen';
}

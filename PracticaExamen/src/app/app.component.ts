import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosListaComponent } from './Alumnos/AlumnosLista.component'; // Importa AlumnosListaComponent
import { CursosListaComponent } from './Cursos/CursosLista.component'; // Importa CursosListaComponent
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-root',  
  standalone: true,  
  imports: [CommonModule, HttpClientModule, CursosListaComponent, AlumnosListaComponent, RouterModule], // Importa CommonModule y HttpClientModule si es necesario
  template: `
    <h1>Menú Principal</h1>
    <nav>
      <ul>
        <li><a routerLink="/alumnos" routerLinkActive="active">Alumnos</a></li>
        <li><a routerLink="/cursos" routerLinkActive="active">Cursos</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'PracticaExamen';
}

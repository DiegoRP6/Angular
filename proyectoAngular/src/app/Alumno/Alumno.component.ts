import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'elAlumno',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './Alumno.component.html',  
  styleUrl: './Alumno.component.css'
})

// Define la clase del componente
export class AlumnoComponent {
    //depende de lo que pongamos aqui abajo se vera una cosa u otra en la pagina web
    columnas : number = 2;
    nombre: string = 'Perico';
    apellidos: string = 'Delgado';
    direccion: string = 'Madrid';
    edad: number = 20;

    //nuevo ejercicio uso de *ngIf
    visibles : boolean = false;
    alternarVisibilidad(){
      this.visibles = !this.visibles;
    }
  }
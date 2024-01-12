import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumno/Alumno.component';

@Component({
  selector: 'app-root', /*esto es lo que conecta con el index.html*/
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoComponent],
  template: `


//Ejercicio2

<button class="{{aplicarClases}}">Botón 1</button>
<br><br>
<button class="color italica negrita" [class.negrita]='aplicarNegrita'>Botón 2</button>
<br><br>
<button [ngClass]= 'addClases()'>Botón 3</button> 





//Ejercicio1
<!--
  <div>
    <h1>{{ encabezado ? getNombreCompleto() : (1+2) }}</h1>
    <img [src]="imagen" />
    <elAlumno></elAlumno>
    <button [disabled]='desactivado'>Púlsame</button>
  </div>
  -->
  `,
  
})
export class AppComponent {

  aplicarClases = "italica negrita";
  aplicarNegrita: boolean = false;

  addClases(){
    let clases = {
      italNegrita: this.aplicarClases,
      negritaBool:  this.aplicarNegrita
    }
    return clases;
  }
  /*
  encabezado: string = 'e';
  imagen: string = 'data:image/png;base64,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';

  desactivado: boolean = true;
  nombre: string = "Perico";
  apellidos: string = "Palotes García";

  getNombreCompleto(): string {
    return this.nombre + ' ' + this.apellidos;
  }
  */
}

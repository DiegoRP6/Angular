// Importa el decorador 'Component' desde el módulo '@angular/core'
import { Component } from '@angular/core';

// Importa los módulos 'CommonModule' y 'RouterOutlet' desde '@angular/common' y '@angular/router' respectivamente
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';
// Importa el componente 'AlumnoListaComponent' desde el archivo 'AlumnoLista.component.ts'
import { AlumnoListaComponent } from './Alumnos/AlumnoLista.component';
//Para ejercicio de la API
import { HttpClientModule } from '@angular/common/http';
// Define un componente con metadatos
@Component({
  // Define el selector del componente, este será usado para insertar este componente en otros archivos HTML
  selector: 'app-root',  
  standalone: true,  
  //añadir aqui cada import que hagamos
  imports: [CommonModule, RouterOutlet, AlumnoComponent, AlumnoListaComponent, HttpClientModule],
  
  template: 
  `<el-alumno></el-alumno>
  <br><br>
  <h3>Esto es para el ejercicio de la API</h3>
  <lista-alumnos></lista-alumnos>
  <br><br>
  <h3>Esto es para el ejercicio de rutas</h3>
  <div style="padding: 10px;">
  <ul class="nav nav-tabs" id="menu">
      <li class="nav-item">
        <a class="nav-link active" href="Alumnos">Link alumn</a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="Profesores">Link prof</a>
      </li>
  </ul>
  <router-outlet></router-outlet>

  </div>
  `
  ,

  
  /*ngIf es para que si es true se muestre y si es false no se muestre
  `
    <img src="assets/tricolorr.jpg" width='200' *ngIf='visible'>
    <button (click)="onClick()">Pulsa aqui</button>
  `,
  */
  /*`
    <div> 
      <h1>{{(encabezado == '')?getNombreCompleto() : 'No encontrado'}}</h1>
      <img src="{{imagen}}" alt="Logo Salesianos" width='200'>
      <el-alumno></el-alumno>
      <button [disabled]="desactivado">Pulsa aqui</button>
    </div>
  `,
  */
  // Define la ruta al archivo CSS que se usará para estilos específicos de este componente
  styleUrl: './app.component.css'
})

// Define la clase del componente
export class AppComponent {
  //depende de lo que pongamos en el encabeza aqui abajo se vera una cosa u otra en la pagina web
  encabezado = 'e';
  imagen : string = 'https://salesianosrioja.com/wp-content/uploads/2016/03/Logo-Salesianos_vertical.png';
  desactivado : boolean = false;
  nombre : string= 'Perico';
  apellido : string = 'Delgado'

  getNombreCompleto() : string {
    return this.nombre + ' '+ this.apellido;
  }
  /*ejercicio imagen
  visible : boolean = true;
  onClick(): void{
    this.visible = false;
  }
  */
}

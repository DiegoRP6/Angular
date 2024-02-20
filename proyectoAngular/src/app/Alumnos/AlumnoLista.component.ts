import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoTituloPipe } from './AlumnoTitulo.pipe';
//para ejercicio de pasar parametros entre componentes 
import { AlumnoCountComponent } from './AlumnosCount.component';
import { IAlumno , Alumno} from './Alumno';
import { AlumnosService } from './AlumnosService';
//para ejercicio de la API
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
//para ejercicio de 
import { RouterModule} from '@angular/router';
@Component({
// Define el selector del componente, este será usado para insertar este componente en otros archivos HTML
  selector: 'lista-alumnos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoTituloPipe, AlumnoCountComponent, RouterModule],
  templateUrl: './AlumnoLista.component.html',  
  styleUrl: './Alumno.component.css',
  //como no se puede usar el servicio en el constructor, se debe declarar en el providers
  providers: [AlumnosService]
})

//Este es el componente que se mostrara cuando se acceda a la ruta de Alumnos
export class AlumnoListaComponent implements OnInit {
    //-------------------
    //ejercicio PARA LA API
    alumnos : Alumno[]= [];
    
    constructor(public losAlumnos : AlumnosService) {
    }
    ngOnInit(): void {
      this.losAlumnos.getAlumnosFromAPI().subscribe((datosAlumnos) => 
        this.alumnos = datosAlumnos);
      }
    //----------
    //esto  es para el ejercicio de pasar parametros entre componentes, del hijo al padre  
    seleccion : string = 'Todos';
    //este metodo es para que el padre pueda escuchar el evento
    alCambiar (opcionElegida : string) : void {
      this.seleccion = opcionElegida;
    }
    //---------
    //ejercicio con la interfaz
    //alumnos : Alumno[];
    //-------------------
    //ejercicio del service
    /*constructor(losAlumnos : AlumnosService) {
      this.alumnos = losAlumnos.getAlumnos();
    }*/
    //-------------------
      //nuevo ejercicio pasar parametros de componente padre a hijo
      getNumTodos() : number {
        return this.alumnos.length;
      }
      // USAMOS 3 = para que compare el tipo de dato
      getNumHombres() : number {
        return this.alumnos.filter(a => a.sexo === 'Hombre').length;
      }
      getNumMujeres() : number {
        return this.alumnos.filter(a => a.sexo === 'Mujer').length;
      }

  }
  

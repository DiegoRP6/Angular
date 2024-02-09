import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoTituloPipe } from './AlumnoTitulo.pipe';
import { AlumnosCountComponent } from './AlumnosCount.component';
import {IAlumno, Alumno} from './Alumno';
import {AlumnosService} from './AlumnosService';

@Component({
  selector: 'listaAlumnos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoTituloPipe, AlumnosCountComponent],
  providers: [AlumnosService],
  templateUrl: './AlumnoLista.component.html',  
  styleUrl: './Alumno.component.css'
})


// Define la clase del componente
export class AlumnoListaComponent implements OnInit{
    seleccion: string = 'Mujer';
    alumnos: Alumno[];

    constructor(public losAlumnos: AlumnosService){
    }

    //metodo subscribe
    ngOnInit : void(){
        this.alumnos = this.losAlumnos.getAlumnos();
    }

    //Metodo que se ejecuta cuando se cambia la opcion seleccionada
    alCambiar(opcionSeleccionada: string) {
        this.seleccion = opcionSeleccionada;
    }

    constructor(public losAlumnos: AlumnosService){
    }

    ngOnInit(){
        this.alumnos = this.losAlumnos.getAlumnos();
    }


    getNumTodos(): number{
        return this.alumnos.length;
    }

    getNumHombres(): number{
        return this.alumnos.filter(a => a.sexo == 'Hombre').length;
    }

    getNumMujeres(): number{
        return this.alumnos.filter(a => a.sexo == 'Mujer').length;
    }

}

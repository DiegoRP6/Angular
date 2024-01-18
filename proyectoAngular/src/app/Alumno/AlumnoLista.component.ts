import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlumnoTituloPipe} from './AlumnoTitulo.pipe';

@Component({
    selector: 'listaAlumno',
    standalone: true,
    imports: [CommonModule, RouterOutlet, AlumnoTituloPipe],
    templateUrl: './AlumnoLista.component.html',  
    styleUrl: './Alumno.component.css'
})

// Define la clase del componente
export class AlumnoListaComponent {
    alumnos: any[] = [
        {
            nombre: 'Perico',
            apellidos: 'Delgado',
            direccion: 'Madrid',
            fnac: '02/02/1990',
            sexo: 'Hombre'
        },
        {
            nombre: 'Juan',
            apellidos: 'Perez',
            direccion: 'Madrid',
            fnac: '03/02/1992',
            sexo: 'Hombre'
        },
        {
            nombre: 'Maria',
            apellidos: 'Gomez',
            direccion: 'Madrid',
            fnac: '12/12/1995',
            sexo: 'Mujer'
        },
        {
            nombre: 'Ana',
            apellidos: 'Lopez',
            direccion: 'Madrid',
            fnac: '11/05/1998',
            sexo: 'Mujer'
        },
        {
            nombre: 'Pedro',
            apellidos: 'Garcia',
            direccion: 'Madrid',
            fnac: '01/01/1999',
            sexo: 'Hombre'
        },
        {
            nombre: 'Luis',
            apellidos: 'Sanchez',
            direccion: 'Madrid',
            fnac: '02/02/1990',
            sexo: 'Hombre'
        }
    ];

}

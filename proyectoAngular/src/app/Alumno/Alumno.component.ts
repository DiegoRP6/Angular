import { Component } from "@angular/core";


@Component({
    selector: 'elAlumno',
    standalone: true,
    templateUrl: './Alumno.component.html',
    styleUrl: './Alumno.component.css'
})

export class AlumnoComponent {
    nombre: string = "Perico";
    apellidos: string = "Palotes García";
    direccion: string = "Calle de la piruleta, 69";
    edad: number = 20;
    columnas: number = 2;
}
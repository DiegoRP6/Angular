import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnosService } from './AlumnosService';
import { ActivatedRoute } from '@angular/router';
import { IAlumno, Alumno } from './Alumno';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'el-alumno',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule], //Esto es para que se pueda usar el *ngIf, SINO NO FUNCIONA Y AGUSTÍN LO HABÍA COMENTADO SIN QUERER xD
    providers: [AlumnosService],
    templateUrl: './Alumno.component.html',
    styleUrls: ['./Alumno.component.css']

})

export class AlumnoComponent implements OnInit {
 
    alumno!: Alumno;

    constructor(public alumnoService: AlumnosService, private route: ActivatedRoute) {
    }
    ngOnInit(): void {

        let id: number = this.route.snapshot.params['id'];
        this.alumnoService.getAlumnoporId(id).subscribe((datosAlumno) => this.alumno = datosAlumno);
       
    }
}
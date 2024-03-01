import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './AlumnosService';
import { Alumno } from './Alumno';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DesplegableCursosComponent } from '../Cursos/DesplegableCursos.component';

@Component({
  selector: 'app-alumnos-curso',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, DesplegableCursosComponent],
  templateUrl: './AlumnosCurso.component.html',
  providers: [AlumnosService]
})
export class AlumnosCursoComponent implements OnInit {
    alumnos: Alumno[] = [];
    cursoSeleccionadoId: number = 0;
  
    constructor(private alumnosService: AlumnosService) { }
  
    ngOnInit(): void {
      this.cursoSeleccionadoId = 0;
    }
  
    handleCursoSeleccionado(idCurso: number): void {
      this.cursoSeleccionadoId = idCurso;
      this.buscarAlumnosPorCurso();
    }
  
    buscarAlumnosPorCurso(): void {
      this.alumnosService.getAlumnosPorCurso(this.cursoSeleccionadoId).subscribe((alumnos: Alumno[]) => {
        this.alumnos = alumnos;
      });
    }
  }
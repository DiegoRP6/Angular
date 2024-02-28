import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from './AlumnosService';
import { Alumno, IAlumno } from './Alumno'; // Asegúrate de que esta importación sea correcta
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alumno-detalles',
  standalone: true,
  templateUrl: './AlumnoDetalles.component.html',
  imports: [CommonModule, RouterOutlet],
  providers: [AlumnosService]
})

export class AlumnoDetallesComponent implements OnInit {
  alumno!: Alumno;

  constructor(
    private route: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {}


    ngOnInit(): void {
    }
}
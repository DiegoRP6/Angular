import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
//nuevo ejercicio mostrar datos de un alumno por el link de su nombre usando el id
import { AlumnosService } from './AlumnosService';
import { Alumno } from './Alumno';
@Component({
  selector: 'el-alumno',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnosService],
  templateUrl: './Alumno.component.html',  
  styleUrl: './Alumno.component.css',
  providers: [AlumnosService]
})

// Define la clase del componente
export class AlumnoComponent implements OnInit {
    //depende de lo que pongamos aqui abajo se vera una cosa u otra en la pagina web
    //nuevo ejercicio uso de *ngIf
    visibles : boolean = false;
    alternarVisibilidad(): void{
      this.visibles = !this.visibles;
    }

    //nuevo ejercicio mostrar datos de un alumno por el link de su nombre usando el id
    alumno! : Alumno;
    constructor(private alumnoService : AlumnosService, private activatedRoute : ActivatedRoute) {}
    
    ngOnInit(): void {
      let idAlumno: number = this.activatedRoute.snapshot.params['id'];
      this.alumnoService.getAlumnosPorId(idAlumno).subscribe((datosAlumno) => 
        this.alumno = datosAlumno);
    }
  }
  

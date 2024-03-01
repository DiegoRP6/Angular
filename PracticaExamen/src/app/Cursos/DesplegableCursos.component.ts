import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CursosService } from './CursosService';
import { Curso } from './Curso';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'desplegable-cursos',
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  providers: [CursosService],
  templateUrl: './DesplegableCursos.component.html',
  standalone: true
})
export class DesplegableCursosComponent implements OnInit {
    cursos: Curso[] = [];
    cursoSeleccionadoId: number = 0;
  
    @Output() cursoSeleccionado = new EventEmitter<number>();
  
    constructor(private cursosService: CursosService) {}
  
    ngOnInit(): void {
      this.cursosService.getCursos().subscribe((cursos: Curso[]) => {
        this.cursos = cursos;
      });
    }
  
    onCursoSelect(): void {
      this.cursoSeleccionado.emit(this.cursoSeleccionadoId);
    }
  }
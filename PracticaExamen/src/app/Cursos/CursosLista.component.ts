import { Component, OnInit } from '@angular/core';
import { CursosService } from './CursosService';
import { Curso } from './Curso';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lista-cursos',
  imports: [CommonModule, RouterOutlet, RouterModule],
  providers: [CursosService],
  templateUrl: './CursoLista.component.html',
  standalone: true
})
export class CursosListaComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((cursos: Curso[]) => { // Especifica el tipo de cursos
      this.cursos = cursos;
    });
  }
}
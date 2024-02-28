import { Component, OnInit } from '@angular/core';
import { CursoService } from './CursosService';
import { Curso } from './Curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lista-cursos',
  imports: [CommonModule],
  templateUrl: './CursoLista.component.html',
  standalone: true
})
export class CursosListaComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCursos()
      .subscribe(cursos => this.cursos = cursos);
  }
}
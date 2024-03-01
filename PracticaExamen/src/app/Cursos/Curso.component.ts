import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CursosService } from './CursosService';
import { ActivatedRoute } from '@angular/router';
import { ICurso, Curso } from './Curso';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'el-curso',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule], //Esto es para que se pueda usar el *ngIf, SINO NO FUNCIONA Y AGUSTÍN LO HABÍA COMENTADO SIN QUERER xD
    providers: [CursosService],
    templateUrl: './Curso.component.html'

})

export class CursoComponent implements OnInit {
 
    curso!: Curso;

    constructor(public CursoService: CursosService, private route: ActivatedRoute) {
    }
    ngOnInit(): void {

        let id: number = this.route.snapshot.params['id'];
        this.CursoService.getCursoPorId(id).subscribe((datosCurso) => this.curso = datosCurso);
       
    }
}
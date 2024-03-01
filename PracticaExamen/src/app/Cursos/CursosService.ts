import { Injectable, isStandalone } from "@angular/core"; 
import { Curso } from "./Curso";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root', 
  }) 
export class CursosService {
    constructor(private http: HttpClient) { }

    getCursos(): Observable<Curso[]> {
        return this.http.get<Curso[]>('https://localhost:44361/api/Cursos/get');
    }

    //getcursosporid
    getCursoPorId(id: number): Observable<Curso> {
        // Agrega el parámetro id en la URL
        return this.http.get<Curso>('https://localhost:44361/api/Cursos/Get/' + id);
    }

}
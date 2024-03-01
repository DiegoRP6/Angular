import { Injectable, isStandalone } from "@angular/core"; 
import { Alumno } from "./Alumno";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  }) 
  export class AlumnosService {
      constructor(private http: HttpClient) { }
  
      getAlumnos(): Observable<Alumno[]> {
          return this.http.get<Alumno[]>('https://localhost:44361/api/Alumno/get');
      }
  
      getAlumnoporId(id: number): Observable<Alumno> {
          // Agrega el parámetro id en la URL
          return this.http.get<Alumno>('https://localhost:44361/api/Alumno/Get/' + id);
      }

      getAlumnosPorCurso(cursoId: number): Observable<Alumno[]> {
        return this.http.get<Alumno[]>('https://localhost:44361/api/Alumno/Get2/' + cursoId);
    }
  }
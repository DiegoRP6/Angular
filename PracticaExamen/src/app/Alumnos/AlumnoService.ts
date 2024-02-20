import { Injectable, isStandalone } from "@angular/core"; // Importar el decorador Injectable
import { Alumno } from "./Alumno";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root', // or 'any' if you prefer a different injection scope
  }) // Decorador Injectable
export class AlumnosService {
    constructor(private http: HttpClient) { }//mediante inyección de dependencias, se inyecta el servicio HttpClient en el constructor de la clase AlumnosService

    getAlumnos(): Observable<Alumno[]> {//metemos el vector de alumnos en un objeto observable
        return this.http.get<Alumno[]>('https://localhost:44396/api/Alumno');
    }
}
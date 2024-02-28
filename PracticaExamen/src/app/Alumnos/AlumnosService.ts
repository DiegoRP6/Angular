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
        return this.http.get<Alumno[]>('https://localhost:44361/api/Alumno');
    }

}
import { Injectable } from "@angular/core";
import { Alumno } from "./Alumno";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlumnosService {
    private url = 'http://localhost:3000/alumnos';
    constructor(private http: HttpClient) { }

    getAlumnos(): Observable<Alumno[]> {
        return this.http.get<Alumno[]>(this.url);
    }
}

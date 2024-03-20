import { Injectable, isStandalone } from "@angular/core"; 
import { Serie } from "./Serie";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root', 
  }) 
export class SerieService {
    constructor(private http: HttpClient) { }

    getSeries(): Observable<Serie[]> {
        return this.http.get<Serie[]>('https://localhost:44396/api/Serie/get');
    }

    //getSeriesporid
    getSeriePorId(ID: number): Observable<Serie> {
        // Agrega el parámetro id en la URL
        return this.http.get<Serie>('https://localhost:44396/api/Serie/Get/' + ID);
    }

}
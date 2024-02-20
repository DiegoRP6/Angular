import { Injectable, NgModule } from "@angular/core";
import { Profesor } from "./Profesor";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
	imports: [HttpClientModule],
	providers: [HttpClient]
})
@Injectable({
    providedIn: 'root'
})
export class ProfesorService {
    //el servicio se encarga de hacer la peticion al servidor
    constructor(private http: HttpClient) {
    }
    getProfesoresFromAPI(): Observable<Profesor[]> {
        return this.http.get<Profesor[]>("https://localhost:44399/api/Profesores");
    }
}
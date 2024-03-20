import { Injectable, isStandalone } from "@angular/core"; 
import { Vehiculo } from "./Vehiculo";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from "../Serie/Serie";


@Injectable({
    providedIn: 'root',
  }) 
  export class VehiculoService {
      constructor(private http: HttpClient) { }
  
      getVehiculos(): Observable<Vehiculo[]> {
          return this.http.get<Vehiculo[]>('https://localhost:44396/api/Vehiculo/get');
      }
  
      getVehiculoporId(ID: number): Observable<Vehiculo> {
          // Agrega el parámetro id en la URL
          return this.http.get<Vehiculo>('https://localhost:44396/api/Vehiculo/Get/' + 1);
      }

      getVehiculosPorSerie(SerieID: number): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>('https://localhost:44396/api/Vehiculo/Get2/' + SerieID);
    }
  }
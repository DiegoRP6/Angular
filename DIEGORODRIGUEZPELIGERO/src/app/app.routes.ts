import { Routes } from '@angular/router';
import { SeriesListaComponent } from './Serie/ListaSerie.component';
import { VehiculosListaComponent } from './Vehiculo/VehiculoLista.component';
import { DesplegableSerieComponent } from './Serie/DesplegableSerie.component';

export const routes: Routes = [
  { path: 'Series', component: SeriesListaComponent },
  { path: 'Vehiculo/:SerieID', component: VehiculosListaComponent},
  { path: 'VehiculoDesplegable/:SerieID', component: DesplegableSerieComponent},
 c
  
];
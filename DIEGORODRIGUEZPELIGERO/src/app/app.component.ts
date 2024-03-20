import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { SeriesListaComponent } from './Serie/ListaSerie.component';
import { VehiculosListaComponent } from './Vehiculo/VehiculoLista.component';


@Component({
  selector: 'app-root',  
  standalone: true,  
  imports: [CommonModule, HttpClientModule, RouterModule, SeriesListaComponent, VehiculosListaComponent ], // Importa CommonModule y HttpClientModule si es necesario
  template: `
    <h1>Menú Principal</h1>
    <li><a routerLink="/Series" routerLinkActive="active">Ver lista series</a></li>
    <li><a routerLink="/DesplegableSerie" routerLinkActive="active">Desplegable de las series</a></li>


    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'DIEGORODRIGUEZPELIGERO';
}

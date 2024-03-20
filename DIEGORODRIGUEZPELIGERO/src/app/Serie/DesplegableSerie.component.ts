import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SerieService } from './SerieService';
import { Serie } from './Serie';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculosListaComponent } from '../Vehiculo/VehiculoLista.component';
import { Location } from '@angular/common';

@Component({
  selector: 'desplegable-Series',
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, VehiculosListaComponent],
  providers: [SerieService],
  templateUrl: './DesplegableSerie.component.html',
  standalone: true
})
export class DesplegableSerieComponent implements OnInit {
    Series: Serie[] = [];
    SerieSeleccionadoId: number = 0;
  
    constructor(private SerieService: SerieService, private router : Router, private route : ActivatedRoute, private location : Location) {}
  
    ngOnInit(): void {
        this.SerieSeleccionadoId = 0
      this.SerieService.getSeries().subscribe((Series: Serie[]) => {
        this.Series = Series;

      });
    }
  
    AlSeleccionarSerie() {
        this.router.navigate(['/VehiculoDesplegable', this.SerieSeleccionadoId]);

    }
  }
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './VehiculoService';
import { Vehiculo } from './Vehiculo';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-Vehiculos-lista',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './VehiculoLista.component.html',
  providers: [VehiculoService]
})
export class VehiculosListaComponent implements OnInit {
    Vehiculos: Vehiculo[] = [];
  
    constructor(private VehiculoService: VehiculoService, private route : ActivatedRoute) { }
    ngOnInit(): void {
        let SerieID: number = this.route.snapshot.params['SerieID'];
        this.VehiculoService.getVehiculosPorSerie(SerieID).subscribe((vehiculos: Vehiculo[]) => {
            this.Vehiculos = vehiculos;
        });
    }

}

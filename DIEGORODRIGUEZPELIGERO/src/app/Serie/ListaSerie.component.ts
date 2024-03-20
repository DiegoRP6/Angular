import { Component, OnInit } from '@angular/core';
import { SerieService } from './SerieService';
import { Serie } from './Serie';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lista-Series',
  imports: [CommonModule, RouterOutlet, RouterModule],
  providers: [SerieService],
  templateUrl: './ListaSerie.component.html',
  standalone: true
})
export class SeriesListaComponent implements OnInit {
  Series: Serie[] = [];

  constructor(private SerieService: SerieService) {}

  ngOnInit(): void {
    this.SerieService.getSeries().subscribe((Series: Serie[]) => { // Especifica el tipo de Series
      this.Series = Series;
    });
  }
}
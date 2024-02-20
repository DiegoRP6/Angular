import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ProfesorService } from "./ProfesorService";
import { Profesor } from "./Profesor";

@Component({
  providers: [ProfesorService],
  standalone: true,
  imports: [ProfesorService, CommonModule, RouterOutlet],
  templateUrl: './ProfesorAPI.cmp.html',  
  template:`
  <h1>Esta es la pagina de lo profesores</h1>
  <p>Tambien se redirige aqui anutomaticamentem la iniciar el proyecto</p>
  `
})
//este es el componente que se mostrara cuando se acceda a la ruta de Profesores
export class ProfesorComponent implements OnInit{
profes : Profesor[] = [];

constructor (public losProfesores : ProfesorService) {}

ngOnInit(): void {
  this.losProfesores.getProfesoresFromAPI().subscribe((datosProfesores) => 
    this.profes = datosProfesores);
  }
}
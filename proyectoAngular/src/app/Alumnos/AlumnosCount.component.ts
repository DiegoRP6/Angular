import { Component, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//este import es para poder usar ngModel en el html
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'cuantos-alumno',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './AlumnosCount.component.html',  
  styleUrl: './AlumnosCount.component.css'
})

// Define la clase del componente
export class AlumnoCountComponent {
    //se tiene que llamar igual que en el html
    opcionElegida : string = 'Todos';
    @Output()
    //esto es para que el padre pueda escuchar el evento
    opcionElegidaChange : EventEmitter<string> = new EventEmitter<string>();
    //esto es para que el padre pueda escuchar el evento
    cuandoCambiemos(){
      this.opcionElegidaChange.emit(this.opcionElegida);
    }
    //usamos input para que el padre pueda pasarle parametros al hijo
    @Input()
    todos : number = 0;
    @Input()
    hombres : number = 0;
    @Input()
    mujeres : number = 0;


  }
  

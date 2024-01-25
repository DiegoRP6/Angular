import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "cuantosAlumnos",
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule],
    templateUrl: "./AlumnosCount.component.html",
    styleUrls: ["./AlumnoCount.component.css"]
    })

export class AlumnosCountComponent {
    opcionElegida: string = "Mujeres";

    @Output()
    globalElegido: EventEmitter<string> = new EventEmitter<string>(); 

    @Input()
    todos: number = 0;

    @Input()
    hombres: number = 0;

    @Input()
    mujeres: number = 0;

    cuandoCambiemos() {
        this.globalElegido.emit(this.opcionElegida);
    }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { get } from "http";

@Component({
    selector: "cuantosAlumnos",
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: "./AlumnosCount.component.html",
    styleUrls: ["./AlumnoCount.component.css"]
    })

export class AlumnosCountComponent {
    opcionElegida: string = "Todos";

    @Output()
    globalElegido: EventEmitter<string> = new EventEmitter<string>(); 

    @Input()
    todos: number = 0;

    @Input()
    hombres: number = 0;

    @Input()
    mujeres: number = 0;
}

import { Component, Input } from "@angular/core";
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
    @Input()
    todos: number = 0;

    @Input()
    hombres: number = 0;

    @Input()
    mujeres: number = 0;
}

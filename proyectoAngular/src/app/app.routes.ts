import { Routes } from '@angular/router';
import { AlumnoListaComponent } from './Alumno/AlumnoLista.component';
import { ProfesorComponent } from './Profesor/Profesor.component';
import { PaginaNoEncontrada } from './Otros/PaginaNoEncontrada';

export const routes: Routes = [
    {path: 'Alumnos', component: AlumnoListaComponent},
    {path: 'Profesores', component: ProfesorComponent},
    {path: '', redirectTo: '/Profesores', pathMatch: 'full'},
    {path: '**', component: PaginaNoEncontrada}
];

import { Routes } from '@angular/router';
import { AlumnosListaComponent } from './Alumnos/AlumnosLista.component';
import { CursosListaComponent } from './Cursos/CursosLista.component';

export const routes: Routes = [
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' }, // Redirecciona a /alumnos por defecto
  { path: 'alumnos', component: AlumnosListaComponent },
  { path: 'cursos', component: CursosListaComponent } // Ruta para la lista de cursos
];
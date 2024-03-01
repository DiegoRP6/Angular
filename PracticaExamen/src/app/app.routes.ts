import { Routes } from '@angular/router';
import { AlumnosListaComponent } from './Alumnos/AlumnosLista.component';
import { CursosListaComponent } from './Cursos/CursosLista.component';
import { AlumnoComponent } from './Alumnos/Alumno.component';
import { CursoComponent } from './Cursos/Curso.component';
import { DesplegableCursosComponent } from './Cursos/DesplegableCursos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' }, // Redirecciona a /alumnos por defecto
  { path: 'alumnos', component: AlumnosListaComponent },
  { path: 'cursos', component: CursosListaComponent }, // Ruta para la lista de cursos
  { path: 'Alumno/:id', component: AlumnoComponent},
  { path: 'Curso/:id', component: CursoComponent},
  { path: 'DesplegableCursos', component: DesplegableCursosComponent, }
  
];
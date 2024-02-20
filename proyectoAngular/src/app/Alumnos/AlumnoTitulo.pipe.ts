//esto es un pipe que se usa para poner el titulo a los alumnos
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ 
    name: 'alumnoTitulo',
    standalone : true

})

export class AlumnoTituloPipe implements PipeTransform{
    transform(value: any, variableSexo: string) : string {
        if(variableSexo == 'Hombre')
            return 'Sr. ' + value;
        else
            return 'Sra. ' + value;
    }
}
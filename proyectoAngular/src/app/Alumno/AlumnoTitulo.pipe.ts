import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'AlumnoTitulo'
})

export class AlumnoTituloPipe implements PipeTransform{
    transform(value: any, sexo: string): string{
        if(sexo == 'Hombre'){
            return 'Sr. ' + value;
        }else{
            return 'Sra. ' + value;
        }
    }

}
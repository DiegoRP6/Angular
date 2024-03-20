import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
	name: 'alumnoTitulo',
    standalone: true

})

export class AlumnoTituloPipe implements PipeTransform{
	transform(value: string, sexo: string): string{
		if(sexo == 'M'){
			return "Sr. " + value;
		}else {
			return "Sra." + value;
		}
	}
}

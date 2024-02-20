export interface IProfesor {
    id : number;
    nombre: string;
    apellidos: string;
    materia: string;
}
export class Profesor implements IProfesor {
    constructor(public id : number,public nombre: string,public apellidos: string,public materia: string) {}
}
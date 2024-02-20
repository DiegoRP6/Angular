export interface IAlumno {//Esto es una interfaz que sirve para definir los atributos de un objeto, en este caso de un alumno
    ID: number;
    Nombre: string;
    Apellidos: string;
    Direccion: string;
    FNac: string;
    Sexo: string;
}

export class Alumno implements IAlumno {//Esto es una clase que sirve para crear objetos de tipo alumno
    constructor( //al poner el public delante de cada atributo, se crea automáticamente el atributo y se le asigna el valor que se le pasa por parámetro
        public ID: number,
        public Nombre: string,
        public Apellidos: string,
        public Direccion: string,
        public FNac: string,
        public Sexo: string
    ) { }
}
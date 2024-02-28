export interface ICurso {//Esto es una interfaz que sirve para definir los atributos de un objeto, en este caso de un alumno
    ID: number;
    Letra : string,
    Ano : number
}

export class Curso implements ICurso {//Esto es una clase que sirve para crear objetos de tipo alumno
    constructor( //al poner el public delante de cada atributo, se crea automáticamente el atributo y se le asigna el valor que se le pasa por parámetro
        public ID: number,
        public Letra: string,
        public Ano : number
    ) { }
}
export interface ISerie {
    ID: number;
    Nombre: string;
}

export class Serie implements ISerie {
    constructor(
        public ID: number,
        public Nombre: string
    ) { }
}
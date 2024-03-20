export interface IVehiculo {
    ID: number;
    Color: string;
    Matricula: string;
    SerieID: number;
}

export class Vehiculo implements IVehiculo {
    constructor(
        public ID: number,
        public Color: string,
        public Matricula: string,
        public SerieID: number
    ) { }
}
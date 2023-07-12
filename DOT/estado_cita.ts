import { Expose, Type, Transform } from 'class-transformer';

export class estado_citaDTO {

    @Expose({ name: 'estcita_id' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    estcita_id: number;

    @Expose({ name: 'estcita_nombre' })
    @Type(() => String)
    estcita_nombre: string;


    constructor(
        ID: number,
        nom_user: string,
    ) {
        this.estcita_id = ID;
        this.estcita_nombre = nom_user;
        
    }

    get nombreId(): string {
        return `${this.estcita_id} - ${this.estcita_nombre}`;
    }
}
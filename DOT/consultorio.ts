import { Expose, Type, Transform } from 'class-transformer';

export class consultorioDTO {

    @Expose({ name: 'cons_codigo' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    cons_codigo: number;

    @Expose({ name: 'cons_nombre' })
    @Type(() => String)
    cons_nombre: string;


    constructor(
        ID: number,
        nom_user: string,
    ) {
        this.cons_codigo = ID;
        this.cons_nombre = nom_user;
        
    }

    get nombreId(): string {
        return `${this.cons_codigo} - ${this.cons_nombre}`;
    }
}
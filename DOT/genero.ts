import { Expose, Type, Transform } from 'class-transformer';

export class generoDTO {

    @Expose({ name: 'gen_id' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    gen_id: number;

    @Expose({ name: 'gen_nombre' })
    @Type(() => String)
    gen_nombre: string;

    @Expose({ name: 'gen_abreviatura' })
    @Type(() => String)
    gen_abreviatura: string;


    constructor(
        ID: number,
        nom_gen: string,
        abrev: string
    ) {
        this.gen_id = ID;
        this.gen_nombre = nom_gen;
        this.gen_abreviatura = abrev;
    }

    get nombreId(): string {
        return `${this.gen_id} - ${this.gen_nombre}`;
    }
}
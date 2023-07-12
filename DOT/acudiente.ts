import { Expose, Type, Transform } from 'class-transformer';

export class acudienteDTO {

    @Expose({ name: 'acu_codigo' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    acu_codigo: number;

    @Expose({ name: 'acu_nombreCompleto' })
    @Type(() => String)
    acu_nombreCompleto: string;

    @Expose({ name: 'acu_telefono' })
    @Type(() => String)
    acu_telefono: string;

    @Expose({ name: 'acu_direccion' })
    @Type(() => String)
    acu_direccion: string;

    constructor(
        ID: number,
        nombre: string,
        telefono: string,
        direccion: string,
    ) {
        this.acu_codigo = ID;
        this.acu_nombreCompleto = nombre;
        this.acu_telefono = telefono;
        this.acu_direccion = direccion;
    }

    get nombreId(): string {
        return `${this.acu_codigo} - ${this.acu_telefono}`;
    }
}
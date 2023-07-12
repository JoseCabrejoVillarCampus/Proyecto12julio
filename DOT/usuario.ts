import { Expose, Type, Transform } from 'class-transformer';

export class usuarioDTO {

    @Expose({ name: 'usu_id' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    usu_id: number;

    @Expose({ name: 'usu_nombre' })
    @Type(() => String)
    usu_nombre: string;

    @Expose({ name: 'usu_segdo_nombre' })
    @Type(() => String)
    usu_segdo_nombre: string;

    @Expose({ name: 'usu_primer_apellido_usuar' })
    @Type(() => String)
    usu_primer_apellido_usuar: string;

    @Expose({ name: 'usu_segdo_apellido_usuar' })
    @Type(() => String)
    usu_segdo_apellido_usuar: string;

    @Expose({ name: 'usu_telefono' })
    @Type(() => String)
    usu_telefono: string;

    @Expose({ name: 'usu_direccion' })
    @Type(() => String)
    usu_direccion: string;

    @Expose({ name: 'usu_email' })
    @Type(() => String)
    usu_email: string;

    @Expose({ name: 'usu_tipodoc' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    usu_tipodoc: number;

    @Expose({ name: 'usu_genero' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    usu_genero: number;

    @Expose({ name: 'usu_acudiente' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    usu_acudiente: number;


    constructor(
        ID: number,
        nombre: string,
        secondnombre: string,
        primerapellido: string,
        segapellido: string,
        telefono: string,
        direccion: string,
        email: string,
        documento: number,
        genero: number,
        acudiente: number,

    ) {
        this.usu_id = ID;
        this.usu_nombre = nombre;
        this.usu_segdo_nombre = secondnombre;
        this.usu_primer_apellido_usuar = primerapellido;
        this.usu_segdo_apellido_usuar = segapellido;
        this.usu_telefono = telefono;
        this.usu_direccion = direccion;
        this.usu_email = email;
        this.usu_tipodoc = documento;
        this.usu_genero = genero;
        this.usu_acudiente = acudiente;
    }

    get nombreId(): string {
        return `${this.usu_id} - ${this.usu_nombre}`;
    }
}
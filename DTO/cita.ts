import { Expose, Type, Transform } from 'class-transformer';

export class citaDTO {

    @Expose({ name: 'cit_codigo' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    cit_codigo: number;

    @Expose({ name: 'cit_fecha' })
    @Type(() => Date)
    cit_fecha: Date;

    @Expose({ name: 'cit_estadoCita' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    cit_estadoCita: number;

    @Expose({ name: 'cit_medico' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    cit_medico: number;

    @Expose({ name: 'cit_datosUsuario' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    cit_datosUsuario: number;


    constructor(
        ID: number,
        fecha: Date,
        estado: number,
        medico: number,
        datausu: number,

    ) {
        this.cit_codigo = ID;
        this.cit_fecha = fecha;
        this.cit_estadoCita = estado;
        this.cit_medico = medico;
        this.cit_datosUsuario = datausu;
    }

    get nombreId(): string {
        return `${this.cit_codigo} - ${this.cit_fecha}`;
    }
}
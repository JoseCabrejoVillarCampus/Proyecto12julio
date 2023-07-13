import { Expose, Type, Transform } from 'class-transformer';

export class medicoDTO {

    @Expose({ name: 'med_nroMatriculaProsional' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    med_nroMatriculaProsional: number;

    @Expose({ name: 'med_nombreCompleto' })
    @Type(() => String)
    med_nombreCompleto: string;

    @Expose({ name: 'med_consultorio' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    med_consultorio: number;

    @Expose({ name: 'med_especialidad' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    med_especialidad: number;


    constructor(
        ID: number,
        nom_gen: string,
        medico: number,
        espec: number,

    ) {
        this.med_nroMatriculaProsional = ID;
        this.med_nombreCompleto = nom_gen;
        this.med_consultorio = medico;
        this.med_especialidad = espec;
    }

    get nombreId(): string {
        return `${this.med_nroMatriculaProsional} - ${this.med_nombreCompleto}`;
    }
}
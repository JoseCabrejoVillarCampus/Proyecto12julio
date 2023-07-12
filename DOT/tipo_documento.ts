import { Expose, Type, Transform } from 'class-transformer';

export class tipo_documentoDTO {

    @Expose({ name: 'tipdoc_id' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    tipdoc_id: number;

    @Expose({ name: 'tipdoc_nombre' })
    @Type(() => String)
    tipdoc_nombre: string;

    @Expose({ name: 'tipdoc_abreviatura' })
    @Type(() => String)
    tipdoc_abreviatura: string;


    constructor(
        ID: number,
        nom_user: string,
        doc_user: string
    ) {
        this.tipdoc_id = ID;
        this.tipdoc_nombre = nom_user;
        this.tipdoc_abreviatura = doc_user;
    }

    get nombreId(): string {
        return `${this.tipdoc_id} - ${this.tipdoc_nombre}`;
    }
}
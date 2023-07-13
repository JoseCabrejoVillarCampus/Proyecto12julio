import { Expose, Type, Transform } from 'class-transformer';

export class especialidadDTO {

    @Expose({ name: 'esp_id' })
    @Transform(({ value, key }) => parseInt(value), { toClassOnly: true })
    esp_id: number;

    @Expose({ name: 'esp_nombre' })
    @Type(() => String)
    esp_nombre: string;


    constructor(
        ID: number,
        nom_user: string,
    ) {
        this.esp_id = ID;
        this.esp_nombre = nom_user;
        
    }

    get nombreId(): string {
        return `${this.esp_id} - ${this.esp_nombre}`;
    }
}
import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsNumber } from 'class-validator';

export class especialidadDTO {

    @Expose({ name: 'esp_id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato esp_id incumple los parametros acordados`};},{ toClassOnly: true})
    esp_id: number;

    @Expose({ name: 'esp_nombre' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro esp_nombre es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro esp_nombre no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato esp_nombre incumple los parametros acordados`};},{ toClassOnly: true})
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
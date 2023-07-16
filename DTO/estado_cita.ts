import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsDefined, IsString, MaxLength } from 'class-validator';

export class estado_citaDTO {

    @Expose({ name: 'estcita_id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato estcita_id incumple los parametros acordados`};},{ toClassOnly: true})
    estcita_id: number;

    @Expose({ name: 'estcita_nombre' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro estcita_nombre es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro estcita_nombre no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato estcita_nombre incumple los parametros acordados`};},{ toClassOnly: true})
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
import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, IsDefined } from 'class-validator';

export class generoDTO {

    @Expose({ name: 'gen_id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato gen_id incumple los parametros acordados`};},{ toClassOnly: true})
    gen_id: number;

    @Expose({ name: 'gen_nombre' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro gen_nombre es obligatorio` }}})
    @MaxLength(45, {message: ()=>{throw {status: 401, message: `El parametro gen_nombre no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato gen_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    gen_nombre: string;

    @Expose({ name: 'gen_abreviatura' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro gen_nombre es obligatorio` }}})
    @MaxLength(45, {message: ()=>{throw {status: 401, message: `El parametro gen_nombre no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato gen_nombre incumple los parametros acordados`};},{ toClassOnly: true})
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
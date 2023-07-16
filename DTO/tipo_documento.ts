import { Expose, Type, Transform } from 'class-transformer';
import {isInt, IsDefined, MaxLength, MinLength, IsEmpty,IsString, IsInt, Matches, IsNumber } from 'class-validator';

export class tipo_documentoDTO {

    @Expose({ name: 'tipdoc_id' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato tipdoc_id incumple los parametros acordados`};},{ toClassOnly: true})
    tipdoc_id: number;

    @Expose({ name: 'tipdoc_nombre' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipdoc_nombre es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro tipdoc_nombre no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato tipdoc_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    tipdoc_nombre: string;

    @Expose({ name: 'tipdoc_abreviatura' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipdoc_abreviatura es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro tipdoc_abreviatura no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato tipdoc_abreviatura incumple los parametros acordados`};},{ toClassOnly: true})
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
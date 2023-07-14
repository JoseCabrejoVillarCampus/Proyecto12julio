import { Expose, Type, Transform, Exclude } from 'class-transformer';
import {isInt, IsDefined, MaxLength, MinLength, IsEmpty,IsString } from 'class-validator';


export class usuarioDTO {

    @Expose({ name: 'usu_id' })
    @IsEmpty({message: ()=>{throw {status: 401, message: `El parametro usu_id es obligatorio` }}})
    @MinLength(1, {message: ()=>{throw {status: 401, message: `El parametro usu_id no puede ser menor a 1 caractere`}}})
    @MaxLength(15, {message: ()=>{throw {status: 401, message: `El parametro usu_id no puede pasar los 15 caracteres`}}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato usu_id incumple los parametros acordados`};},{ toClassOnly: true})
    usu_id: number;

    @Expose({ name: 'usu_nombre' })
    @IsEmpty({message: ()=>{throw {status: 401, message: `El parametro usu_nombre es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_nombre no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    usu_nombre: string;

    @Expose({ name: 'usu_segdo_nombre' })
    @IsEmpty({message: ()=>{throw {status: 401, message: `El parametro usu_segdo_nombre es obligatorio` }}})
    @MaxLength(45, {message: ()=>{throw {status: 401, message: `El parametro usu_segdo_nombre no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_segdo_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    usu_segdo_nombre: string;

    @Expose({ name: 'usu_primer_apellido_usuar' })
    @IsEmpty({message: ()=>{throw {status: 401, message: `El parametro usu_primer_apellido_usuar es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_primer_apellido_usuar no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_primer_apellido_usuar incumple los parametros acordados`};},{ toClassOnly: true})
    usu_primer_apellido_usuar: string;

    @Expose({ name: 'usu_segdo_apellido_usuar' })
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_segdo_apellido_usuar no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_segdo_apellido_usuar incumple los parametros acordados`};},{ toClassOnly: true})
    usu_segdo_apellido_usuar: string;

    @Expose({ name: 'usu_telefono' })
    @IsEmpty({message: ()=>{throw {status: 401, message: `El parametro usu_telefono es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_telefono no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[0-9\s +]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_telefono incumple los parametros acordados`};},{ toClassOnly: true})
    usu_telefono: string;

    @Expose({ name: 'usu_direccion' })
    @MaxLength(100, {message: ()=>{throw {status: 401, message: `El parametro usu_direccion no puede pasar os 100 caracteres`}}})
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.# @]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_direccion incumple los parametros acordados`};},{ toClassOnly: true})
    usu_direccion: string;

    @Expose({ name: 'usu_email' })
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_email incumple los parametros acordados`};},{ toClassOnly: true})
    usu_email: string;

    @Expose({ name: 'usu_edad' })
    @Transform(({ value, key }) => {
        if(typeof value != "number") {throw {status:400, message: "Parametros incorrectos"}}
        return value
    }, { toClassOnly: true })
    usu_edad: number;

    @Expose({ name: 'usu_tipodoc' })
    @Transform(({ value, key }) => {
        if(typeof value != "number") {throw {status:400, message: "1 Parametros incorrectos"}}
        return value
    }, { toClassOnly: true })
    usu_tipodoc: number;

    @Expose({ name: 'usu_genero' })
    @Transform(({ value, key }) => {
        if(typeof value != "number") {throw {status:400, message: "2 Parametros incorrectos"}}
        return value
    }, { toClassOnly: true })
    usu_genero: number;

    @Exclude({ toPlainOnly: true})
    @Expose({ name: 'usu_acudiente' })
    usu_acudiente? : number;


    constructor(
        ID: number,
        nombre: string,
        secondnombre: string,
        primerapellido: string,
        segapellido: string,
        telefono: string,
        direccion: string,
        email: string,
        edad: number,
        documento: number,
        genero: number,
        acudiente?: number,

    ) {
        this.usu_id = ID;
        this.usu_nombre = nombre;
        this.usu_segdo_nombre = secondnombre;
        this.usu_primer_apellido_usuar = primerapellido;
        this.usu_segdo_apellido_usuar = segapellido;
        this.usu_telefono = telefono;
        this.usu_direccion = direccion;
        this.usu_email = email;
        this.usu_edad = edad;
        this.usu_tipodoc = documento;
        this.usu_genero = genero;
        this.usu_acudiente = acudiente;
    }

    get nombreId(): string {
        return `${this.usu_id} - ${this.usu_nombre}`;
    }
}
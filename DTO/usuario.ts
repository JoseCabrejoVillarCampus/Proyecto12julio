import { Expose, Type, Transform, Exclude } from 'class-transformer';
import {isInt, IsDefined, MaxLength, MinLength, IsEmpty,IsString, IsInt, Matches, IsNumber } from 'class-validator';


export class usuarioDTO {

    @Expose({ name: 'usu_id' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro usu_id es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato usu_id incumple los parametros acordados`};},{ toClassOnly: true})
    usu_id: number;

    

    @Expose({ name: 'usu_nombre' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro usu_nombre es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_nombre no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    usu_nombre: string;

    @Expose({ name: 'usu_segdo_nombre' })
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro usu_segdo_nombre es obligatorio` }}})
    @MaxLength(45, {message: ()=>{throw {status: 401, message: `El parametro usu_segdo_nombre no puede pasar os 45 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_segdo_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    usu_segdo_nombre: string;

    @Expose({ name: 'usu_primer_apellido_usuar' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro usu_primer_apellido_usuar es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_primer_apellido_usuar no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_primer_apellido_usuar incumple los parametros acordados`};},{ toClassOnly: true})
    usu_primer_apellido_usuar: string;

    @Expose({ name: 'usu_segdo_apellido_usuar' })
    @IsString()
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro usu_segdo_apellido_usuar no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_segdo_apellido_usuar incumple los parametros acordados`};},{ toClassOnly: true})
    usu_segdo_apellido_usuar: string;

    @Expose({ name: 'usu_telefono' })
    @IsString()
    @IsDefined({ message: 'El parametro usu_telefono es obligatorio' })
    @MaxLength(50, { message: 'El parametro usu_telefono no puede pasar los 50 caracteres' })
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_telefono no tiene un formato de número de teléfono válido' })
    usu_telefono: string;
    

    @Expose({ name: 'usu_direccion' })
    @IsString()
    @MaxLength(100, {message: ()=>{throw {status: 401, message: `El parametro usu_direccion no puede pasar os 100 caracteres`}}})
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.# @]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_direccion incumple los parametros acordados`};},{ toClassOnly: true})
    usu_direccion: string;

    @Expose({ name: 'usu_email' })
    @IsString()
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value)) return value; else throw {status: 400, message:`El dato usu_email incumple los parametros acordados`};},{ toClassOnly: true})
    usu_email: string;

    @Expose({ name: 'usu_edad' })
    @IsNumber()
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_edad no tiene un formato válido' })
    usu_edad: number;

    @Expose({ name: 'usu_tipodoc' })
    @IsNumber()
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_tipodoc no tiene un formato válido' })
    usu_tipodoc: number;

    @Expose({ name: 'usu_genero' })
    @IsNumber()
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_genero no tiene un formato válido' })
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
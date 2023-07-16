import { Expose, Type, Transform } from 'class-transformer';
import {isInt, IsDefined, MaxLength, MinLength, IsEmpty,IsString, IsInt, Matches, IsNumber, IsDate } from 'class-validator';

export class citaDTO {

    @Expose({ name: 'cit_codigo' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro usu_id es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato usu_id incumple los parametros acordados`};},{ toClassOnly: true})
    cit_codigo: number;

    @Expose({ name: 'cit_fecha' })
    @IsDate()
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || value == undefined) return(value); else throw {status: 400, message:`el parámetro ingresado para fecha no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    cit_fecha: Date;

    @Expose({ name: 'cit_estadoCita' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro cit_estadoCita es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato cit_estadoCita incumple los parametros acordados`};},{ toClassOnly: true})
    cit_estadoCita: number;

    @Expose({ name: 'cit_medico' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro cit_medico es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato cit_medico incumple los parametros acordados`};},{ toClassOnly: true})
    cit_medico: number;

    @Expose({ name: 'cit_datosUsuario' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro cit_datosUsuario es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato cit_datosUsuario incumple los parametros acordados`};},{ toClassOnly: true})
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
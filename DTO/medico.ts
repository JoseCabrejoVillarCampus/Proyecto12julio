import { Expose, Type, Transform } from 'class-transformer';
import {isInt, IsDefined, MaxLength, MinLength, IsEmpty,IsString, IsInt, Matches, IsNumber } from 'class-validator';
export class medicoDTO {

    @Expose({ name: 'med_nroMatriculaProsional' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro med_nroMatriculaProsional es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato med_nroMatriculaProsional incumple los parametros acordados`};},{ toClassOnly: true})
    med_nroMatriculaProsional: number;

    @Expose({ name: 'med_nombreCompleto' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro med_nombreCompleto es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro med_nombreCompleto no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ\.]+$/.test(value)) return value; else throw {status: 400, message:`El dato med_nombreCompleto incumple los parametros acordados`};},{ toClassOnly: true})
    med_nombreCompleto: string;

    @Expose({ name: 'med_consultorio' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro med_consultorio es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato med_consultorio incumple los parametros acordados`};},{ toClassOnly: true})
    med_consultorio: number;

    @Expose({ name: 'med_especialidad' })
    @IsNumber()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro med_especialidad es obligatorio` }}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato med_especialidad incumple los parametros acordados`};},{ toClassOnly: true})
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
import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsString, IsDefined, MaxLength, Matches } from 'class-validator';

export class acudienteDTO {

    @Expose({ name: 'acu_codigo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato acu_codigo incumple los parametros acordados`};},{ toClassOnly: true})
    acu_codigo: number;

    @Expose({ name: 'acu_nombreCompleto' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro acu_nombreCompleto es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro acu_nombreCompleto no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato acu_nombreCompleto incumple los parametros acordados`};},{ toClassOnly: true})
    acu_nombreCompleto: string;

    @Expose({ name: 'acu_telefono' })
    @IsString()
    @IsDefined({ message: 'El parametro acu_telefono es obligatorio' })
    @MaxLength(50, { message: 'El parametro acu_telefono no puede pasar los 50 caracteres' })
    @Matches(/^[0-9\s-()+]+$/, { message: 'El dato acu_telefono no tiene un formato de número de teléfono válido' })
    acu_telefono: string;

    @Expose({ name: 'acu_direccion' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro acu_direccion es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro acu_direccion no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato acu_direccion incumple los parametros acordados`};},{ toClassOnly: true})
    acu_direccion: string;

    constructor(
        ID: number,
        nombre: string,
        telefono: string,
        direccion: string,
    ) {
        this.acu_codigo = ID;
        this.acu_nombreCompleto = nombre;
        this.acu_telefono = telefono;
        this.acu_direccion = direccion;
    }
}

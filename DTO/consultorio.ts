import { Expose, Type, Transform } from 'class-transformer';
import { IsNumber, IsDefined, IsString, MaxLength} from 'class-validator';

export class consultorioDTO {

    @Expose({ name: 'cons_codigo' })
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value) || value==undefined ) return Math.floor(value); else throw {status: 400, message:`El dato cons_codigo incumple los parametros acordados`};},{ toClassOnly: true})
    cons_codigo: number;

    @Expose({ name: 'cons_nombre' })
    @IsString()
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro cons_nombre es obligatorio` }}})
    @MaxLength(50, {message: ()=>{throw {status: 401, message: `El parametro cons_nombre no puede pasar os 50 caracteres`}}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value)) return value; else throw {status: 400, message:`El dato cons_nombre incumple los parametros acordados`};},{ toClassOnly: true})
    cons_nombre: string;


    constructor(
        ID: number,
        nom_user: string,
    ) {
        this.cons_codigo = ID;
        this.cons_nombre = nom_user;
        
    }

    get nombreId(): string {
        return `${this.cons_codigo} - ${this.cons_nombre}`;
    }
}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform, Exclude } from 'class-transformer';
import { IsDefined, MaxLength, IsString, Matches, IsNumber } from 'class-validator';
export class usuarioDTO {
    constructor(ID, nombre, secondnombre, primerapellido, segapellido, telefono, direccion, email, edad, documento, genero, acudiente) {
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
}
__decorate([
    Expose({ name: 'usu_id' }),
    IsNumber(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro usu_id es obligatorio` }; } }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato usu_id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsString(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro usu_nombre es obligatorio` }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro usu_nombre no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato usu_nombre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segdo_nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro usu_segdo_nombre es obligatorio` }; } }),
    MaxLength(45, { message: () => { throw { status: 401, message: `El parametro usu_segdo_nombre no puede pasar os 45 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato usu_segdo_nombre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_primer_apellido_usuar' }),
    IsString(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro usu_primer_apellido_usuar es obligatorio` }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro usu_primer_apellido_usuar no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato usu_primer_apellido_usuar incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_segdo_apellido_usuar' }),
    IsString(),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro usu_segdo_apellido_usuar no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato usu_segdo_apellido_usuar incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    IsString(),
    IsDefined({ message: 'El parametro usu_telefono es obligatorio' }),
    MaxLength(50, { message: 'El parametro usu_telefono no puede pasar los 50 caracteres' }),
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_telefono no tiene un formato de número de teléfono válido' }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    IsString(),
    MaxLength(100, { message: () => { throw { status: 401, message: `El parametro usu_direccion no puede pasar os 100 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.# @]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato usu_direccion incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    IsString(),
    Transform(({ value }) => { if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato usu_email incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'usu_edad' }),
    IsNumber(),
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_edad no tiene un formato válido' }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_edad", void 0);
__decorate([
    Expose({ name: 'usu_tipodoc' }),
    IsNumber(),
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_tipodoc no tiene un formato válido' }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'usu_genero' }),
    IsNumber(),
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato usu_genero no tiene un formato válido' }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_genero", void 0);
__decorate([
    Exclude({ toPlainOnly: true }),
    Expose({ name: 'usu_acudiente' }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_acudiente", void 0);

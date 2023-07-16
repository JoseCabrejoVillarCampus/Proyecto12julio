var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsString, IsDefined, MaxLength, Matches } from 'class-validator';
export class acudienteDTO {
    constructor(ID, nombre, telefono, direccion) {
        this.acu_codigo = ID;
        this.acu_nombreCompleto = nombre;
        this.acu_telefono = telefono;
        this.acu_direccion = direccion;
    }
}
__decorate([
    Expose({ name: 'acu_codigo' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato acu_codigo incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], acudienteDTO.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: 'acu_nombreCompleto' }),
    IsString(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro acu_nombreCompleto es obligatorio` }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro acu_nombreCompleto no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato acu_nombreCompleto incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'acu_telefono' }),
    IsString(),
    IsDefined({ message: 'El parametro acu_telefono es obligatorio' }),
    MaxLength(50, { message: 'El parametro acu_telefono no puede pasar los 50 caracteres' }),
    Matches(/^[0-9\s-()+]+$/, { message: 'El dato acu_telefono no tiene un formato de número de teléfono válido' }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: 'acu_direccion' }),
    IsString(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro acu_direccion es obligatorio` }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro acu_direccion no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato acu_direccion incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "acu_direccion", void 0);

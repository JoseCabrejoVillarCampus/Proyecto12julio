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
import { IsDefined, IsNumber, IsDate } from 'class-validator';
export class citaDTO {
    constructor(ID, fecha, estado, medico, datausu) {
        this.cit_codigo = ID;
        this.cit_fecha = fecha;
        this.cit_estadoCita = estado;
        this.cit_medico = medico;
        this.cit_datosUsuario = datausu;
    }
    get nombreId() {
        return `${this.cit_codigo} - ${this.cit_fecha}`;
    }
}
__decorate([
    Expose({ name: 'cit_codigo' }),
    IsNumber(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro usu_id es obligatorio` }; } }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato usu_id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: 'cit_fecha' }),
    IsDate(),
    Transform(({ value }) => { if (/^\d{4}-\d{2}-\d{2}$/.test(value) || value == undefined)
        return (value);
    else
        throw { status: 400, message: `el parámetro ingresado para fecha no es válido, debe seguir la sintaxis AAAA-MM-DD` }; }, { toClassOnly: true }),
    __metadata("design:type", Date)
], citaDTO.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: 'cit_estadoCita' }),
    IsNumber(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro cit_estadoCita es obligatorio` }; } }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato cit_estadoCita incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: 'cit_medico' }),
    IsNumber(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro cit_medico es obligatorio` }; } }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato cit_medico incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: 'cit_datosUsuario' }),
    IsNumber(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro cit_datosUsuario es obligatorio` }; } }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato cit_datosUsuario incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_datosUsuario", void 0);

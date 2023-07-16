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
import { IsDefined, MaxLength, IsString, IsNumber } from 'class-validator';
export class tipo_documentoDTO {
    constructor(ID, nom_user, doc_user) {
        this.tipdoc_id = ID;
        this.tipdoc_nombre = nom_user;
        this.tipdoc_abreviatura = doc_user;
    }
    get nombreId() {
        return `${this.tipdoc_id} - ${this.tipdoc_nombre}`;
    }
}
__decorate([
    Expose({ name: 'tipdoc_id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato tipdoc_id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], tipo_documentoDTO.prototype, "tipdoc_id", void 0);
__decorate([
    Expose({ name: 'tipdoc_nombre' }),
    IsString(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro tipdoc_nombre es obligatorio` }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro tipdoc_nombre no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato tipdoc_nombre incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documentoDTO.prototype, "tipdoc_nombre", void 0);
__decorate([
    Expose({ name: 'tipdoc_abreviatura' }),
    IsString(),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro tipdoc_abreviatura es obligatorio` }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: `El parametro tipdoc_abreviatura no puede pasar os 50 caracteres` }; } }),
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato tipdoc_abreviatura incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documentoDTO.prototype, "tipdoc_abreviatura", void 0);

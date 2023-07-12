var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from 'class-transformer';
export class citaDTO {
    constructor(ID, fecha, medico, espec, datausu) {
        this.cit_codigo = ID;
        this.cit_fecha = fecha;
        this.cit_estadoCita = medico;
        this.cit_medico = espec;
        this.cit_datosUsuario = datausu;
    }
    get nombreId() {
        return `${this.cit_codigo} - ${this.cit_fecha}`;
    }
}
__decorate([
    Expose({ name: 'cit_codigo' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: 'cit_fecha' }),
    Type(() => Date),
    __metadata("design:type", Date)
], citaDTO.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: 'cit_estadoCita' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: 'cit_medico' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: 'cit_datosUsuario' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "cit_datosUsuario", void 0);

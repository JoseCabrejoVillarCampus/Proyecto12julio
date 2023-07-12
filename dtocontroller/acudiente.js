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
export class acudienteDTO {
    constructor(ID, nombre, telefono, direccion) {
        this.acu_codigo = ID;
        this.acu_nombreCompleto = nombre;
        this.acu_telefono = telefono;
        this.acu_direccion = direccion;
    }
    get nombreId() {
        return `${this.acu_codigo} - ${this.acu_telefono}`;
    }
}
__decorate([
    Expose({ name: 'acu_codigo' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], acudienteDTO.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: 'acu_nombreCompleto' }),
    Type(() => String),
    __metadata("design:type", String)
], acudienteDTO.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'acu_telefono' }),
    Type(() => String),
    __metadata("design:type", String)
], acudienteDTO.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: 'acu_direccion' }),
    Type(() => String),
    __metadata("design:type", String)
], acudienteDTO.prototype, "acu_direccion", void 0);

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
export class usuarioDTO {
    constructor(ID, nombre, secondnombre, primerapellido, segapellido, telefono, direccion, email, documento, genero, acudiente) {
        this.usu_id = ID;
        this.usu_nombre = nombre;
        this.usu_segdo_nombre = secondnombre;
        this.usu_primer_apellido_usuar = primerapellido;
        this.usu_segdo_apellido_usuar = segapellido;
        this.usu_telefono = telefono;
        this.usu_direccion = direccion;
        this.usu_email = email;
        this.usu_tipodoc = documento;
        this.usu_genero = genero;
        this.usu_acudiente = acudiente;
    }
    get nombreId() {
        return `${this.usu_id} - ${this.usu_nombre}`;
    }
}
__decorate([
    Expose({ name: 'usu_id' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segdo_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_primer_apellido_usuar' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_segdo_apellido_usuar' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    Type(() => String),
    __metadata("design:type", String)
], usuarioDTO.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'usu_tipodoc' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'usu_genero' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: 'usu_acudiente' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuarioDTO.prototype, "usu_acudiente", void 0);

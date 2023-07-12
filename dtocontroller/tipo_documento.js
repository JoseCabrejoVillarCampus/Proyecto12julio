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
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], tipo_documentoDTO.prototype, "tipdoc_id", void 0);
__decorate([
    Expose({ name: 'tipdoc_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], tipo_documentoDTO.prototype, "tipdoc_nombre", void 0);
__decorate([
    Expose({ name: 'tipdoc_abreviatura' }),
    Type(() => String),
    __metadata("design:type", String)
], tipo_documentoDTO.prototype, "tipdoc_abreviatura", void 0);

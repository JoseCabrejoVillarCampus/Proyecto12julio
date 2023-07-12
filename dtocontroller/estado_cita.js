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
export class estado_citaDTO {
    constructor(ID, nom_user) {
        this.estcita_id = ID;
        this.estcita_nombre = nom_user;
    }
    get nombreId() {
        return `${this.estcita_id} - ${this.estcita_nombre}`;
    }
}
__decorate([
    Expose({ name: 'estcita_id' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], estado_citaDTO.prototype, "estcita_id", void 0);
__decorate([
    Expose({ name: 'estcita_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], estado_citaDTO.prototype, "estcita_nombre", void 0);

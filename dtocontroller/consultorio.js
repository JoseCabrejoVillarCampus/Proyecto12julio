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
export class consultorioDTO {
    constructor(ID, nom_user) {
        this.cons_codigo = ID;
        this.cons_nombre = nom_user;
    }
    get nombreId() {
        return `${this.cons_codigo} - ${this.cons_nombre}`;
    }
}
__decorate([
    Expose({ name: 'cons_codigo' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], consultorioDTO.prototype, "cons_codigo", void 0);
__decorate([
    Expose({ name: 'cons_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], consultorioDTO.prototype, "cons_nombre", void 0);

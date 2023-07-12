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
export class generoDTO {
    constructor(ID, nom_gen, abrev) {
        this.gen_id = ID;
        this.gen_nombre = nom_gen;
        this.gen_abreviatura = abrev;
    }
    get nombreId() {
        return `${this.gen_id} - ${this.gen_nombre}`;
    }
}
__decorate([
    Expose({ name: 'gen_id' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], generoDTO.prototype, "gen_id", void 0);
__decorate([
    Expose({ name: 'gen_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], generoDTO.prototype, "gen_nombre", void 0);
__decorate([
    Expose({ name: 'gen_abreviatura' }),
    Type(() => String),
    __metadata("design:type", String)
], generoDTO.prototype, "gen_abreviatura", void 0);

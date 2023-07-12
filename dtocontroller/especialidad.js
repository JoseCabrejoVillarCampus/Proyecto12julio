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
export class especialidadDTO {
    constructor(ID, nom_user) {
        this.esp_id = ID;
        this.esp_nombre = nom_user;
    }
    get nombreId() {
        return `${this.esp_id} - ${this.esp_nombre}`;
    }
}
__decorate([
    Expose({ name: 'esp_id' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], especialidadDTO.prototype, "esp_id", void 0);
__decorate([
    Expose({ name: 'esp_nombre' }),
    Type(() => String),
    __metadata("design:type", String)
], especialidadDTO.prototype, "esp_nombre", void 0);

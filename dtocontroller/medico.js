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
export class medicoDTO {
    constructor(ID, nom_gen, medico, espec) {
        this.med_nroMatriculaProsional = ID;
        this.med_nombreCompleto = nom_gen;
        this.med_consultorio = medico;
        this.med_especialidad = espec;
    }
    get nombreId() {
        return `${this.med_nroMatriculaProsional} - ${this.med_nombreCompleto}`;
    }
}
__decorate([
    Expose({ name: 'med_nroMatriculaProsional' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], medicoDTO.prototype, "med_nroMatriculaProsional", void 0);
__decorate([
    Expose({ name: 'med_nombreCompleto' }),
    Type(() => String),
    __metadata("design:type", String)
], medicoDTO.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'med_consultorio' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], medicoDTO.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: 'med_especialidad' }),
    Transform(({ value, key }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], medicoDTO.prototype, "med_especialidad", void 0);

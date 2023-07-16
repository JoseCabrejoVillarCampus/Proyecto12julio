import { IsNumber, IsOptional } from 'class-validator';

export class validacionDTO {
    @IsNumber()
    id?: number;
}

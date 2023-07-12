import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {especialidadDTO} from "../dtocontroller/especialidad.js"

const proxyEspecialidad = express();
proxyEspecialidad.use((req,res,next)=>{
    try {
        let data = plainToClass(especialidadDTO, req.body, { excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyEspecialidad;
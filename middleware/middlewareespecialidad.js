import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {especialidadDTO} from "../dtocontroller/especialidad.js";
import { validate } from "class-validator";

const proxyEspecialidad = express();
proxyEspecialidad.use(async(req,res,next)=>{
    try {
        let data = plainToClass(especialidadDTO, req.body, { 
            excludeExtraneousValues: true});
            await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyEspecialidad;
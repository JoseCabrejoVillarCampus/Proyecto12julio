import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {estado_citaDTO} from "../dtocontroller/estado_cita.js"

const proxyEstadoCita = express();
proxyEstadoCita.use((req,res,next)=>{
    try {
        let data = plainToClass(estado_citaDTO, req.body, { excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyEstadoCita;
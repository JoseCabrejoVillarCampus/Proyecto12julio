import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {medicoDTO} from "../dtocontroller/medico.js"

const proxyMedico = express();
proxyMedico.use((req,res,next)=>{
    try {
        let data = plainToClass(medicoDTO, req.body, { excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyMedico;
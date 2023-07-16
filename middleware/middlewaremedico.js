import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {medicoDTO} from "../dtocontroller/medico.js";
import { validate } from "class-validator";

const proxyMedico = express();
proxyMedico.use(async(req,res,next)=>{
    try {
        let data = plainToClass(medicoDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyMedico;
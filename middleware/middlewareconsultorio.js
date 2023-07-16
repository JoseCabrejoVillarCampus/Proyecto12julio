import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { consultorioDTO } from "../dtocontroller/consultorio.js";
import { validate } from "class-validator";

const proxyConsultorio = express();
proxyConsultorio.use(async(req,res,next)=>{
    try {
        let data = plainToClass(consultorioDTO, req.body, { excludeExtraneousValues: true});
        await validate (data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyConsultorio;
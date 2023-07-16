import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { acudienteDTO } from "../dtocontroller/acudiente.js";
import { validate } from "class-validator";

const proxyAcudiente = express();
proxyAcudiente.use(async(req,res,next)=>{
    try {
        let data = plainToClass(acudienteDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyAcudiente;
import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import {tipo_documentoDTO} from "../dtocontroller/tipo_documento.js"

const proxyTipoDocumento = express();
proxyTipoDocumento.use(async(req,res,next)=>{
    try {
        let data = plainToClass(tipo_documentoDTO, req.body, { excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyTipoDocumento;
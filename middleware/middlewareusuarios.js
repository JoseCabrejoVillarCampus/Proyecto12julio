import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {usuarioDTO} from "../dtocontroller/usuario.js"

const proxyUsuario = express();
proxyUsuario.use((req,res,next)=>{
    try {
        let data = plainToClass(usuarioDTO, req.body, { excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyUsuario;
import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {generoDTO} from "../dtocontroller/genero.js"

const proxyGenero = express();
proxyGenero.use((req,res,next)=>{
    try {
        let data = plainToClass(generoDTO, req.body, { excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyGenero;
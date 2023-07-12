import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {citaDTO} from "../dtocontroller/cita.js"

const proxyCita = express();
proxyCita.use((req,res,next)=>{
    try {
        let data = plainToClass(citaDTO, req.body, { excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyCita;
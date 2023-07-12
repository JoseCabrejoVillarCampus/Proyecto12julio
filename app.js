import dotenv from 'dotenv';
import express from 'express';
import storageEstadoCita from './routers/estado_cita.js';
import storageConsultorio from './routers/consultorio.js';
import storageEspecialidad from './routers/especialidad.js';
import "reflect-metadata";

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/estado_cita", storageEstadoCita);
appExpress.use("/consultorio", storageConsultorio);
appExpress.use("/especialidad", storageConsultorio);

const config =JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


/* let json = {
    id: 123,
    nombre: "jose",
    id_responsable:3,
    estado : 1,
    created_by: 5,
    update_by: 3,
    created_at: null,
    updated_at: null,
    deleted_at: null
}

let data = plainToClass(estado_citaDTO, json, {excludeExtraneousValues: true});
console.log(data); */
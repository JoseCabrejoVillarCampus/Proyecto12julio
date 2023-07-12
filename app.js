import dotenv from 'dotenv';
import express from 'express';
import storageEstadoCita from './routers/estado_cita.js';
import storageConsultorio from './routers/consultorio.js';
import storageEspecialidad from './routers/especialidad.js';
import storageTipoDocumento from './routers/tipo_documento.js';
import storageGenero from './routers/genero.js';
import storageMedico from './routers/medico.js';
import storageCita from './routers/cita.js';
import storageAcudiente from './routers/acudiente.js';
import storageUsuario from './routers/usuario.js';


dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/estado_cita", storageEstadoCita);
appExpress.use("/consultorio", storageConsultorio);
appExpress.use("/especialidad", storageEspecialidad);
appExpress.use("/tipo_documento", storageTipoDocumento);
appExpress.use("/genero", storageGenero);
appExpress.use("/medico", storageMedico);
appExpress.use("/cita", storageCita);
appExpress.use("/acudiente", storageAcudiente);
appExpress.use("/usuario", storageUsuario);

const config =JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));



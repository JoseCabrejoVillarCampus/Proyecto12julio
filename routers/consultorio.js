import mysql from 'mysql2';
import {Router} from 'express';
import proxyConsultorio from '../middleware/middlewareconsultorio.js';
const storageConsultorio = Router();
let con = undefined;

storageConsultorio.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageConsultorio.get("/:id?", proxyConsultorio, (req, res) => {
    if (req.params.id === "paciente") {
        con.query(
            `SELECT consultorio.*
            FROM consultorio
            INNER JOIN medico ON consultorio.cons_codigo = medico.med_consultorio
            INNER JOIN cita ON medico.med_nroMatriculaProsional = cita.cit_medico
            WHERE cita.cit_datosUsuario = 1`,
            [req.params.id],
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener los medicos:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else {
        let sql = (req.params.id) ?
            [`SELECT * FROM consultorio WHERE cons_codigo = ?`, req.params.id] :
            [`SELECT * FROM consultorio`];
        con.query(...sql,
            (err, data, fie) => {
                res.send(data);
            }
        );
    }
});

storageConsultorio.post("/", proxyConsultorio ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO consultorio SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear consultorio:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageConsultorio.put("/:id", proxyConsultorio ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE consultorio SET ?  WHERE cons_codigo = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar consultorio:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageConsultorio.delete("/:id", proxyConsultorio ,(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM consultorio WHERE cons_codigo = ?`,
        [id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar consultorio:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageConsultorio;
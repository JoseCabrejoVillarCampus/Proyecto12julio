import mysql from 'mysql2';
import {Router} from 'express';
import proxyMedico from '../middleware/middlewaremedico.js';
const storageMedico = Router();
let con = undefined;

storageMedico.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageMedico.get("/:id?", proxyMedico, (req, res) => {
    if (req.params.id === "especialidad") {
        con.query(
            `SELECT medico.med_nombreCompleto AS "medicos",
            medico.med_especialidad AS "fk_especialidad" ,
            especialidad.esp_nombre AS "especialidad_medico"
            FROM medico 
            INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id
            WHERE especialidad.esp_nombre = ?`,
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
    } else if(req.params.id === "consultorio") {
        con.query(
            `SELECT medico.med_nroMatriculaProsional, medico.med_nombreCompleto, consultorio.cons_nombre
            FROM medico
            INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
            `,
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
    }else {
        let sql = (req.params.id) ?
            [`SELECT * FROM medico WHERE med_nroMatriculaProsional = ?`, req.params.id] :
            [`SELECT * FROM medico`];
        con.query(...sql,
            (err, data, fie) => {
                res.send(data);
            }
        );
    }
});



storageMedico.post("/", proxyMedico ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO medico SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear medico:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageMedico.put("/:id", proxyMedico ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE medico SET ?  WHERE med_nroMatriculaProsional = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar medico:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageMedico.delete("/:id", proxyMedico ,(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM medico WHERE med_nroMatriculaProsional = ?`,
        [id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar medico:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageMedico;
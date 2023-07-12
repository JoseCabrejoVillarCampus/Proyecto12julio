import mysql from 'mysql2';
import {Router} from 'express';
import proxyEstadoCita from '../middleware/middlewareestado_cita.js';
const storageEstadoCita = Router();
let con = undefined;

storageEstadoCita.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageEstadoCita.get("/:id?", proxyEstadoCita , (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM estado_cita WHERE ?`, req.params]
        : [`SELECT * FROM estado_cita`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageEstadoCita.post("/", proxyEstadoCita ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO estado_cita SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear la cita:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageEstadoCita.put("/:id", proxyEstadoCita ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE estado_cita SET ?  WHERE id = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar la cita:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageEstadoCita.delete("/:id", proxyEstadoCita ,(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM estado_cita WHERE id = ?`,
        [id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar la cita:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageEstadoCita;
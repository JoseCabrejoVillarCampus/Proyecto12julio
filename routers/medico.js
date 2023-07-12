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

storageMedico.get("/:?", proxyMedico , (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM medico WHERE ?`, req.params]
        : [`SELECT * FROM medico`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

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
        `UPDATE medico SET ?  WHERE id = ?`,
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
        `DELETE FROM medico WHERE id = ?`,
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
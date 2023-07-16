import mysql from 'mysql2';
import {Router} from 'express';
import proxyEspecialidad from '../middleware/middlewareespecialidad.js';
const storageEspecialidad = Router();
let con = undefined;

storageEspecialidad.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageEspecialidad.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM especialidad WHERE esp_id = ?`, req.params.id]
        : [`SELECT * FROM especialidad`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageEspecialidad.post("/", proxyEspecialidad ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO especialidad SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear especialidad:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageEspecialidad.put("/:id", proxyEspecialidad ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE especialidad SET ?  WHERE esp_id = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar especialidad:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageEspecialidad.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM especialidad WHERE esp_id = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar especialidad:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageEspecialidad;
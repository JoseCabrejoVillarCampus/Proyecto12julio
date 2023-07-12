import mysql from 'mysql2';
import {Router} from 'express';
import proxyCita from '../middleware/middlewarecita.js';
const storageCita = Router();
let con = undefined;

storageCita.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageCita.get("/:id?", proxyCita , (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM cita WHERE ?`, req.params]
        : [`SELECT * FROM cita`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageCita.post("/", proxyCita ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO cita SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear cita:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageCita.put("/:id", proxyCita ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE cita SET ?  WHERE id = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar cita:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageCita.delete("/:id", proxyCita ,(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM cita WHERE id = ?`,
        [id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar cita:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageCita;
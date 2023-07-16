import mysql from 'mysql2';
import {Router} from 'express';
import proxyAcudiente from '../middleware/middlewareacudiente.js';
/* import validateConsulta from '../middleware/middlewarevalidacion.js'; */
const storageAcudiente = Router();
let con = undefined;

storageAcudiente.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageAcudiente.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM acudiente WHERE acu_codigo = ?`, req.params.id]
        : [`SELECT * FROM acudiente`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageAcudiente.post("/", proxyAcudiente ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO acudiente SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear acudiente:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageAcudiente.put("/:id", proxyAcudiente ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE acudiente SET ?  WHERE acu_codigo = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar acudiente:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageAcudiente.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM acudiente WHERE acu_codigo = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar acudiente:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageAcudiente;
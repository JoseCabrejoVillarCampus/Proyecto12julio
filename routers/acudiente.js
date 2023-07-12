import mysql from 'mysql2';
import {Router} from 'express';
import proxyAcudiente from '../middleware/middlewareacudiente.js';
const storageAcudiente = Router();
let con = undefined;

storageAcudiente.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageAcudiente.get("/:id?", proxyAcudiente , (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM acudiente WHERE ?`, req.params]
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
        `UPDATE acudiente SET ?  WHERE id = ?`,
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
storageAcudiente.delete("/:id", proxyAcudiente ,(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM acudiente WHERE id = ?`,
        [id],
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
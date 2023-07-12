import mysql from 'mysql2';
import {Router} from 'express';
import proxyTipoDocumento from '../middleware/middlewaretipo_documento.js';
const storageTipoDocumento = Router();
let con = undefined;

storageTipoDocumento.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageTipoDocumento.get("/:id?", proxyTipoDocumento , (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM tipo_documento WHERE tipdoc_id = ?`, req.params.id]
        : [`SELECT * FROM tipo_documento`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageTipoDocumento.post("/", proxyTipoDocumento ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO tipo_documento SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear tipo documento:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageTipoDocumento.put("/:id", proxyTipoDocumento ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE tipo_documento SET ?  WHERE tipdoc_id = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar tipo documento:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageTipoDocumento.delete("/:id", proxyTipoDocumento ,(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM tipo_documento WHERE tipdoc_id = ?`,
        [id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar tipo documento:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageTipoDocumento;
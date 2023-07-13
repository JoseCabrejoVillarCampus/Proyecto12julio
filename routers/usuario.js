import mysql from 'mysql2';
import {
    Router
} from 'express';
import proxyUsuario from '../middleware/middlewareusuarios.js';
const storageUsuario = Router();
let con = undefined;

storageUsuario.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageUsuario.get("/:id?", proxyUsuario, (req, res) => {
    if (req.params.id === "order") {
        con.query(
            `SELECT * FROM usuario ORDER BY usu_nombre`,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener los usuarios:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    }else if (req.params.id === "medico") {
        con.query(
            `SELECT usuario.*
            FROM usuario
            INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario
            WHERE cita.cit_medico = 123456`,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener los usuarios:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else {
        let sql = (req.params.id) 
        ?[`SELECT * FROM usuario WHERE usu_id = ?`, req.params.id] 
        :[`SELECT * FROM usuario`];
        con.query(...sql,
            (err, data, fie) => {
                res.send(data);
            }
        );
    }
});

storageUsuario.post("/", proxyUsuario, (req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO usuario SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear usuario:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageUsuario.put("/:id", proxyUsuario, (req, res) => {
    con.query(
        /*sql*/
        `UPDATE usuario SET ? WHERE usu_id = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar usuario:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});

storageUsuario.delete("/:id", proxyUsuario, (req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM usuario WHERE usu_id = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar usuario:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageUsuario;
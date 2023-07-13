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

storageCita.get("/:id?", proxyCita, (req, res) => {
    if (req.params.id === "order") {
        con.query(
            `SELECT * FROM cita ORDER BY cit_fecha ASC`,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else if (req.params.id === "prox") {
        con.query(
            `SELECT cita.*
            FROM cita
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            WHERE usuario.usu_id = 1
                AND cita.cit_fecha >= CURDATE()
            ORDER BY cita.cit_fecha ASC
            LIMIT 1
            `,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else if (req.params.id === "date") {
        con.query(
            `SELECT cita.*
            FROM cita
            WHERE cita.cit_fecha = '2023-07-12'
            `,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else if (req.params.id === "numdate") {
        con.query(
            `SELECT COUNT(*) AS total_citas
            FROM cita
            WHERE cit_medico = 123456
            AND cit_fecha = '2023-07-12'
            `,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else if (req.params.id === "consultoriopaciente") {
        con.query(
            `SELECT DISTINCT c.cons_nombre
            FROM cita ci
            JOIN medico m ON ci.cit_medico = m.med_nroMatriculaProsional
            JOIN consultorio c ON m.med_consultorio = c.cons_codigo
            WHERE ci.cit_datosUsuario = 1
            `,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    }else {
        let sql = (req.params.id) ?
            [`SELECT * FROM cita WHERE cit_codigo = ?`, req.params.id] :
            [`SELECT * FROM cita`];
        con.query(...sql,
            (err, data, fie) => {
                res.send(data);
            }
        );
    }
});

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
        `UPDATE cita SET ?  WHERE cit_codigo = ?`,
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
        `DELETE FROM cita WHERE cit_codigo = ?`,
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
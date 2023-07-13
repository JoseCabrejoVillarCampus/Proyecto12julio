import mysql, { raw } from 'mysql2';
import {Router} from 'express';
import proxyCita from '../middleware/middlewarecita.js';
const storageCita = Router();
let con = undefined;

storageCita.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageCita.get("/:id?/:data?", proxyCita, (req, res) => {
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
            WHERE usuario.usu_id = ?
                AND cita.cit_fecha >= CURDATE()
            ORDER BY cita.cit_fecha ASC
            LIMIT 1
            `,
            [req.params.data],
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
            WHERE cita.cit_fecha = ?
            `,
            [req.params.data]
            ,
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
            AND cit_fecha = ?
            `,
            [req.params.id]
            ,
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
            WHERE ci.cit_datosUsuario = ?
            `,
            [req.params.data],
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        );
    } else if (req.params.id === "generoatendido") {
        con.query(
            `SELECT ci.cit_codigo, u.usu_nombre, u.usu_genero, ec.estcita_nombre
            FROM cita ci
            JOIN usuario u ON ci.cit_datosUsuario = u.usu_id
            JOIN estado_cita ec ON ci.cit_estadoCita = ec.estcita_id
            WHERE u.usu_genero = ?
            AND ec.estcita_nombre = "Confirmada"
            `,
            [req.params.data]
            ,
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        ) 
    } else if (req.params.id === "medico") {
        con.query(
            `SELECT cita.* ,
            usuario.usu_nombre nombre_usuario,
            medico.med_nombreCompleto nombre_medico
            FROM cita
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            WHERE cita.cit_medico = ?
            `,
            [req.params.data],
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        ) 
    }else if (req.params.id === "rechazadas") {
        con.query(
            `SELECT
            cita.cit_codigo,
            cita.cit_fecha,
            usuario.usu_id,
            usuario.usu_nombre,
            medico.med_nombreCompleto
            FROM cita
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            WHERE cit_estadoCita = 2 AND MONTH(cit_fecha) = MONTH(?)
            `,
            [req.params.data],
            (err, data, fil) => {
                if (err) {
                    console.error('Error al obtener la cita:', err.message);
                    res.sendStatus(500);
                } else {
                    res.json(data);
                }
            }
        ) 
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
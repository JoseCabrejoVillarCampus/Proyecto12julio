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

storageUsuario.get("/:id?/:data?", proxyUsuario, (req, res) => {
    const { id, data } = req.params;
    let sql = '';

    switch (id) {
        case "order":
            sql = `SELECT * FROM usuario ORDER BY usu_nombre`;
        break;
        case "medico":
            sql = `SELECT usuario.*
            FROM usuario
            INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario
            WHERE cita.cit_medico = ${con.escape(data)}`;
        break;
        default:
            sql = id ? `SELECT * FROM usuario WHERE usu_id = ${con.escape(id)}` : `SELECT * FROM usuario`;
        break;
    }
    con.query(sql, (err, data, fields) => {
        if (err) {
        console.error('Error al obtener la cita:', err.message);
        res.sendStatus(500);
        } else {
        res.json(data);
        }
    });
    });

storageUsuario.post("/", proxyUsuario, (req, res) => {
    const paciente = req.body;
    if (paciente.usu_edad < 18) {
        // Validar si ya existe el acudiente en la base de datos
        con.query(
            `SELECT * FROM acudiente WHERE acu_nombreCompleto = ?`,
            [paciente.usu_acudiente],
            (err, data) => {
                if (err) {
                    console.error('Error al buscar el acudiente:', err.message);
                    res.sendStatus(500);
                } else {
                    if (data.length > 0) {
                        // El acudiente ya está registrado, asignar su código al paciente
                        const acudienteId = data[0].acu_codigo;
                        paciente.usu_acudiente = acudienteId;
                        insertarPaciente(paciente, res);
                    } else {
                        // El acudiente no está registrado, insertarlo primero
                        con.query(
                            `INSERT INTO acudiente (acu_nombreCompleto) VALUES (?)`,
                            [paciente.usu_acudiente],
                            (err, result) => {
                                if (err) {
                                    console.error('Error al crear el acudiente:', err.message);
                                    res.sendStatus(500);
                                } else {
                                    // Obtener el código del acudiente insertado
                                    const acudienteId = result.insertId;
                                    paciente.usu_acudiente = acudienteId;
                                    insertarPaciente(paciente, res);
                                }
                            }
                        );
                    }                    
                }
            }
        );
    } else {
        // El paciente es mayor de edad, insertarlo directamente
        insertarPaciente(paciente, res);
    }
});

function insertarPaciente(paciente, res) {
    con.query(
        `INSERT INTO usuario SET ?`,
        paciente,
        (err, result) => {
            if (err) {
                console.error('Error al crear usuario:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
}




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
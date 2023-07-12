CREATE DATABASE consultas;
USE consultas;

CREATE TABLE estado_cita(
    estcita_id INT,
    estcita_nombre VARCHAR(20)
);
CREATE TABLE consultorio(
    cons_codigo INT,
    cons_nombre VARCHAR(50)
);
CREATE TABLE especialidad(
    esp_id INT,
    esp_nombre VARCHAR(20)
);
DROP TABLE tipo_documento;
CREATE TABLE tipo_documento(
    tipdoc_id INT,
    tipdoc_nombre VARCHAR(20),
    tipdoc_abreviatura VARCHAR(20)
);

CREATE TABLE genero(
    gen_id INT,
    gen_nombre VARCHAR(50),
    gen_abreviatura VARCHAR(20)
);
CREATE TABLE medico(
    med_nroMatriculaProsional INT,
    med_nombreCompleto VARCHAR (120),
    med_consultorio INT,
    med_especialidad INT
);
CREATE TABLE cita(
    cit_codigo INT,
    cit_fecha DATE,
    cit_estadoCita INT,
    cit_medico INT,
    cit_datosUsuario INT
);
CREATE TABLE acudiente(
    acu_codigo INT,
    acu_nombreCompleto VARCHAR (100),
    acu_telefono VARCHAR (100),
    acu_direccion VARCHAR (200)
);
CREATE TABLE usuario(
    usu_id INT,
    usu_nombre VARCHAR (50),
    usu_segdo_nombre VARCHAR (45),
    usu_primer_apellido_usuar VARCHAR (50),
    usu_segdo_apellido_usuar VARCHAR (50),
    usu_telefono VARCHAR (50),
    usu_direccion VARCHAR (100),
    usu_email VARCHAR (100),
    usu_tipodoc INT,
    usu_genero INT,
    usu_acudiente INT
);
/*  
?CREAMOS LAS PK PARA LAS TABLAS
*/
ALTER TABLE estado_cita ADD CONSTRAINT estcita_id PRIMARY KEY (estcita_id);
ALTER TABLE consultorio ADD CONSTRAINT cons_codigo PRIMARY KEY (cons_codigo);
ALTER TABLE especialidad ADD CONSTRAINT esp_id PRIMARY KEY (esp_id);
ALTER TABLE medico ADD CONSTRAINT med_nroMatriculaProsional PRIMARY KEY (med_nroMatriculaProsional);
ALTER TABLE cita ADD CONSTRAINT cit_codigo PRIMARY KEY (cit_codigo);
ALTER TABLE usuario ADD CONSTRAINT usu_id PRIMARY KEY (usu_id);
ALTER TABLE acudiente ADD CONSTRAINT acu_codigo PRIMARY KEY (acu_codigo);
ALTER TABLE genero ADD CONSTRAINT gen_id PRIMARY KEY (gen_id);
ALTER TABLE tipo_documento ADD CONSTRAINT tipdoc_id PRIMARY KEY (tipdoc_id);
/*  
?AGREGAMOS LAS FOREIGN KEYS Y LAS RELACIONES
*/
ALTER TABLE medico
    ADD CONSTRAINT med_nroMatriculaProsional FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo);
ALTER TABLE medico
    ADD CONSTRAINT med_nroMatriculaProsionalesp FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id);
ALTER TABLE cita
    ADD CONSTRAINT cita_med FOREIGN KEY (cit_codigo) REFERENCES medico(med_nroMatriculaProsional);
ALTER TABLE cita
    ADD CONSTRAINT cita_dat_usu FOREIGN KEY (cit_codigo) REFERENCES estado_cita(estcita_id);
ALTER TABLE cita
    ADD CONSTRAINT cita_usu FOREIGN KEY (cit_codigo) REFERENCES usuario(usu_id);
ALTER TABLE usuario
    ADD CONSTRAINT usu_tipodoc FOREIGN KEY (usu_id) REFERENCES tipo_documento(tipdoc_id);
ALTER TABLE usuario
    ADD CONSTRAINT usu_genero FOREIGN KEY (usu_id) REFERENCES genero(gen_id);
ALTER TABLE usuario
    ADD CONSTRAINT usu_acudiente FOREIGN KEY (usu_id) REFERENCES acudiente(acu_codigo);








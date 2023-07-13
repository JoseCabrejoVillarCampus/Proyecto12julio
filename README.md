# Consultorio Medico Backend

Este proyecto proporciona varios endpoints para generar consultas A continuación se detalla cómo funciona cada Router y cómo consumirlos.

## Tecnologias Implementadas

<img src="img/nodejs-1-logo.svg" alt="MySQL Logo" width="100">
<img src="img/Unofficial_JavaScript_logo_2.svg.png" alt="MySQL Logo" width="100">
<img src="img/mysql-logo.svg" alt="MySQL Logo" width="100">
<img src="img/nodemon.svg" alt="MySQL Logo" width="100">
<img src="img/Typescript_logo_2020.svg.png" alt="MySQL Logo" width="100">
<img src="img/2560px-Npm-logo.svg.png" alt="MySQL Logo" width="100">

# Dependencias Implementadas

Express
class-transformer
reflect-metadata
mysql2
dotenv
nodemon
typescript

# Instalacion

Inicializamos en consola
```
npm init -y
```
instalamos nodemon
```
npm i -E -D nodemon
```
instalamos express
```
npm i -E -D express
```
instalamos dotenv
```
npm i -E -D dotenv
```
instalamos mysql2
```
npm i -E -D mysql2
```
instalamos class-transformer
```
npm i -E -D class-transformer
```
instalamos reflect-metadata
```
npm i -E -D reflect-metadata
```
instalamos typescript
```
npm i -E -D typescript
```

## Configuracion del .env

```
MY_CONFIG={"hostname": "", "port":}
MY_CONNECT={"host":"localhost","user":"","database":"","password":"","port":}

```

## Configuracion del tsconfig

```
{
    "compilerOptions":{
        "target":"es6",
        "module":"ES6",
        "moduleResolution":"node",
        "outDir":"./dtocontroller",
        "esModuleInterop":true,
        "experimentalDecorators":true,
        "emitDecoratorMetadata": true
    }
}
```

### Routes: (Para las tablas en general solo reemplazamos /ruta)

Rutas: /acudiente, /cita, /consultorio, /especialidad, /estado_cita, /genero, /medico, /tipo_documento, /usuairo

Listar tablas
Método: GET
```
Endpoint: http://127.9.63.21:5012/ruta
```
Descripción: Este endpoint devuelve todos los usuarios registrados en el sistema.

---

Obtener un dato por su pk
Método: GET
```
Endpoint: http://127.9.63.21:5012/ruta/:pk
```
Descripción: Este endpoint devuelve un dato específico según su pk.
Parámetros de ruta:

---

Crear un nuevo dato
Método: POST
```
Endpoint: http://127.9.63.21:5012/ruta
```
Descripción: Este endpoint permite crear un nuevo dato.

---

Actualizar un dato existente
Método: PUT
```
Endpoint: http://127.9.63.21:5012/ruta/:pk
```
Descripción: Este endpoint permite actualizar los datos existentes.

---

Eliminar una ruta
Método: DELETE
```
Endpoint: http://127.9.63.21:5012/ruta/:pk /:parametro
```
Descripción: Este endpoint permite eliminar un dato existente.

### Routes: (Para las para las consultas solicitadas)

Obtener todos los pacientes alfabéticamente
```
Endpoint: http://127.9.63.21:5014/usuario/order
```
Obtener todas las citas alfabéticamente
```
Endpoint: http://127.9.63.21:5014/cita/order
```
Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**)
```
Endpoint: http://127.9.63.21:5014/medico/especialidad/"nombreespecialidad"
```
Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**)
```
Endpoint: http://127.9.63.21:5014/cita/prox/"id del usuario"
```
Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
```
Endpoint: http://127.9.63.21:5014/cita/medico/cit_medico
```
Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
```
Endpoint: http://127.9.63.21:5014/consultorio/paciente/cit_datosUsuario
```
Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
```
Endpoint: http://127.9.63.21:5014/cita/date/"fecha buscada"
```
Obtener los médicos y sus consultorios
```
Endpoint: http://127.9.63.21:5014/medico/consultorio
```
Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
```
Endpoint: http://127.9.63.21:5014/cita/numdate/"fecha"
```
Obtener los consultorio donde se aplicó las citas de un paciente
```
Endpoint: http://127.9.63.21:5014/cita/consultoriopaciente/"cit_datosUsuario"
```
Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
```
Endpoint: http://127.9.63.21:5014/cita/generoatendido/genero(1 masculino, 2 femenino)
```


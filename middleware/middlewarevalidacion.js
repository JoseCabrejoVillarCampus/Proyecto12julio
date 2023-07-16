
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { validacionDTO } from '../DTO/validacion.js';

const validateConsulta = async (req, res, next) => {
  try {
    const consulta = plainToClass(validacionDTO, req.params);
    await validate(consulta);
    req.params = consulta;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};

export default validateConsulta;

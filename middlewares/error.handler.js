const { ValidationError } = require("sequelize");

function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

//Middleware para validar si el orm lanzó un error, usamos el ValidationError de sequelize para saber si viene un error
function ormErrorHandler(err, req, res, next) {
  if(err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
      data: err.data
    })
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }

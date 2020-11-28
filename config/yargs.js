const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por realizar'
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
  .command('crear','Crear un elemento por hacer',{ descripcion })
  .command('actualizar','Actualiza el estado completo de una tarea',{ descripcion, completado })
  .command('borrar','Borra tarea',{ descripcion })
  .help()
  .argv;

  module.exports = {
    argv
  }
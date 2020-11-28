const opts = {
  descripcion : {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por realizar'
  }
}
const extra_param = {
  completado : {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
  }
}

const argv = require('yargs')
  .command('crear','Crear un elemento por hacer',opts)
  .command('actualizar','Actualiza el estado completo de una tarea',{...opts,...extra_param})
  .command('borrar','Borra tarea',opts)
  .help()
  .argv;

  module.exports = {
    argv
  }
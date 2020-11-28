const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer); //object to json
  fs.writeFile('db/data.json',data,(err)=>{
    if(err) throw new Error('No se pudo grabar: ',err);
  })
}

const cargarDB = () => {
  try{
    listadoPorHacer = require('../db/data.json');
  }catch(error){
    listadoPorHacer = [];
  }
}

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado=true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  if(index>=0){
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  }
}

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  }
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
}

module.exports = {
  crear,
  getListado,
  actualizar
}
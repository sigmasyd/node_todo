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
  crear
}
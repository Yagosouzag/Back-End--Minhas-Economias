const Objetivos = require('../models/Objetivo');

const findAllObjetivosService = async () => {
  const allObjetivos = await Objetivos.find();
  return allObjetivos;
};

const findByIdObjetivoService = async (idParam) => {
  const oneObjetivo = await Objetivos.findById(idParam);
  return oneObjetivo;
};

const createObjetivoService = async (newObjetivo) => {
  const createdObjetivo = await Objetivos.create(newObjetivo);
  return createdObjetivo;
};

const updateObjetivoService = async (idParam, editObjetivo) => {
  const updateObjetivo = await Objetivos.findByIdAndUpdate(idParam, editObjetivo);
  return updateObjetivo;
};

const deleteObjetivoService = async (idParam) => {
  return await Objetivos.findByIdAndDelete(idParam);
};

module.exports = {
  findAllObjetivosService,
  findByIdObjetivoService,
  createObjetivoService,
  updateObjetivoService,
  deleteObjetivoService,
};

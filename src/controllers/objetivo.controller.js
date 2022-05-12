const mongoose = require('mongoose');
const objetivosService = require('../services/objetivo.service');

const findAllObjetivosController = async (req, res) => {
  const allObjetivos = await objetivosService.findAllObjetivosService();
  if (allObjetivos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum objetivo cadastrado!' });
  }
  res.send(allObjetivos);
};

const findByIdObjetivoController = async (req, res) => {
  const idParam = req.params.id;
  const chosenObjetivo = await objetivosService.findByIdObjetivoService(idParam);
  if (!chosenObjetivo) {
    return res.status(404).send({ message: 'Objetivo não encontrada!' });
  }
  res.send(chosenObjetivo);
};

const createObjetivoController = async (req, res) => {
  const objetivo = req.body;
  const newObjetivo = await objetivosService.createObjetivoService(objetivo);
  res.status(201).send(newObjetivo);
};

const updateObjetivoController = async (req, res) => {
  const idParam = req.params.id;
  const editObjetivo = req.body;
  const updatedObjetivo = await objetivosService.updateObjetivoService(
    idParam,
    editObjetivo,
  );
  res.send(updatedObjetivo);
};

const deleteObjetivoController = async (req, res) => {
  const idParam = req.params.id;
  await objetivosService.deleteObjetivoService(idParam);
  res.send({ message: 'Objetivo foi deletado com sucesso!' });
};

module.exports = {
  findAllObjetivosController,
  findByIdObjetivoController,
  createObjetivoController,
  updateObjetivoController,
  deleteObjetivoController,
};

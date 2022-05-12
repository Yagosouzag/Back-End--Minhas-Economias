const route = require('express').Router();
const controllerObjetivos = require('../controllers/objetivo.controller');

const {
  validId,
  validObjectBody,
} = require('../middlewares/objetivo.middleware');


route.get('/all-objetivos', controllerObjetivos.findAllObjetivosController);
route.get(
  '/one-objetivo/:id',
  validId,
  controllerObjetivos.findByIdObjetivoController,
);
route.post(
  '/create-objetivo',
  validObjectBody,
  controllerObjetivos.createObjetivoController,
);
route.put(
  '/update-objetivo/:id',
  validId,
  validObjectBody,
  controllerObjetivos.updateObjetivoController,
);
route.delete(
  '/delete-objetivo/:id',
  validId,
  controllerObjetivos.deleteObjetivoController,
);

module.exports = route;

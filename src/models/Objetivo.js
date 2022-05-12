const mongooose = require('mongoose');

const ObjetivoSchema = new mongooose.Schema({
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
  atingido: { type: Boolean, required: true },
});

const Objetivo = mongooose.model('objetivos', ObjetivoSchema);

module.exports = Objetivo;

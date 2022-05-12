const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/objetivo.route');
const connectToDatabase = require('./src/database/database');
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/objetivos', routes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require("express");
const { v4: uuidv4 } = require("uuid"); //v4 gera ids aleatórios

const app = express();
app.use(express.json());

/** DB fake, utilizando array */
const customers = [];


/** Criar uma conta */
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const id = uuidv4();

  /** Object add a new customer in array */
  customers.push({
    cpf,
    name,
    id,
    statement: []
  });

  return response.status(201).send();
});


app.listen(3333);
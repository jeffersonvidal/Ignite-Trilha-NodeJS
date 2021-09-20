const express = require("express");
const { v4: uuidv4 } = require("uuid"); //v4 gera ids aleatórios

const app = express();
app.use(express.json());

/** DB fake, utilizando array */
const customers = [];


/** Criar uma conta */
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const customerAlreadyExists = customers.some(
    (customer => customer.cpf === cpf)
  );

  if(customerAlreadyExists){
    return response.status(400).json({error: "Customer already exists!"});
  }

  /** Object add a new customer in array */
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return response.status(201).send();
});


app.listen(3333);
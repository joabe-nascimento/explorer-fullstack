---

const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
const { id, user } = request.params;

response.send(`  Mensagem ID: ${id}.
  Nome do usuário: ${user}.
 `);
});

app.get("/users", (request, response) => {
const { page, limit } = request.query;

response.send(`Página: ${page}. Mostrar: ${limit}`);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor iniciado com sucesso! ${PORT}`));

---

const express = require("express");

const app = express();

app.get("/users", (request, response) => {
const { page, limit } = request.query;

response.send(`Página: ${page}. Mostrar: ${limit}`);
});

app.post("/users", (request, response) => {
response.send("Você chamou o POST");
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor iniciado com sucesso! ${PORT}`));

---

---

const express = require("express");

const app = express();
app.use(express.json());

app.post("/users", (request, response) => {
const { name, email, password } = request.body;

// response.send(`Usuario: ${name}. Email: ${email}. Senha: ${password} `);

response.json({ name, email, password });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor iniciado com sucesso! ${PORT}`));

---

///request.params Passar informações no endereço da rota, recuperando valor.

//// -- request.params é usado para informações mais simples, usado para passar somente o id

///request.params.id Recuperar informação atráves de paramêtros.

///Request > Obter a informação que estão sendo enviadas para a api
///Responde > Devolver a resposta

------- Controllers ------------
Processa a requisição

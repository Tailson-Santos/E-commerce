const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE = "./users.json";

function readUsers() {
  return JSON.parse(fs.readFileSync(FILE, "utf-8"));
}

function saveUsers(users) {
  fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
}

// 🟢 CADASTRO SIMPLES
app.post("/register", (req, res) => {
  const { usuario, senha } = req.body;

  const users = readUsers();

  const existe = users.find(u => u.usuario === usuario);

  if (existe) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  users.push({ usuario, senha });

  saveUsers(users);

  return res.json({ message: "Cadastro feito!" });
});

// 🔐 LOGIN SIMPLES
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  const users = readUsers();

  const user = users.find(
    u => u.usuario === usuario && u.senha === senha
  );

  if (!user) {
    return res.status(401).json({ message: "Erro no login" });
  }

  return res.json({ message: "Login ok!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
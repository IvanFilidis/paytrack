const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

function initializeDB() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS empresas (
      cnpj TEXT PRIMARY KEY,
      nome TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS centros_custo (
      identificador TEXT PRIMARY KEY,
      nome TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS colaboradores (
      cpf TEXT PRIMARY KEY,
      usuario TEXT,
      nome TEXT,
      sobrenome TEXT,
      cargo TEXT,
      matricula TEXT,
      empresa_cnpj TEXT,
      centro_custo_id TEXT,
      FOREIGN KEY(empresa_cnpj) REFERENCES empresas(cnpj),
      FOREIGN KEY(centro_custo_id) REFERENCES centros_custo(identificador)
    )`);
  });
}

async function upsertData(data) {
  // Implementar lógica de upsert aqui
}

module.exports = { initializeDB, upsertData };
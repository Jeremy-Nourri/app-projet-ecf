const express = require('express');
const { sequelize } = require('./config/database');
require('dotenv').config();

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page non trouvée' });
});

sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .catch((err) => {
    console.log("Erreur lors de la connexion à la base de données", err.message);
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
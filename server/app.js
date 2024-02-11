require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./config/database');

const indexRoutes = require('./routes/indexRoutes');

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', indexRoutes);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page non trouvée' });
});

sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .catch((err) => {
    console.log("Erreur lors de la connexion à la base de données", err.message);
});

app.listen(process.env.PORT_SERVER, () => {
  console.log(`Serveur lancé sur le port ${process.env.PORT_SERVER}`);
});
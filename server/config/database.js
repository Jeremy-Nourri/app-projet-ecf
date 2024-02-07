require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

const Utilisateur = require("../models/Utilisateur")(sequelize);
const Tache = require("../models/Tache")(sequelize);
const Projet = require("../models/Projet")(sequelize);

sequelize
  .sync({ force: false})
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
);


module.exports = { sequelize, Utilisateur, Tache, Projet }
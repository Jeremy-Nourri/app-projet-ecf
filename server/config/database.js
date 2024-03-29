require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

const Utilisateur = require("../models/Utilisateur")(sequelize);
const Tache = require("../models/Tache")(sequelize);
const Projet = require("../models/Projet")(sequelize);

Utilisateur.hasMany(Projet, { foreignKey: 'utilisateur_id' });
Projet.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

Utilisateur.hasMany(Tache, { foreignKey: 'utilisateur_id' });
Tache.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

Projet.hasMany(Tache, { foreignKey: 'projet_id' });
Tache.belongsTo(Projet, { foreignKey: 'projet_id' });


sequelize
  .sync({ force: false})
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
);


module.exports = { sequelize, Utilisateur, Tache, Projet }
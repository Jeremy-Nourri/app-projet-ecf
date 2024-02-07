// tache.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize) => {
  const Tache = sequelize.define("Tache", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    priorite: {
      type: DataTypes.INTEGER,
    },
    statut: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_echeance: {
      type: DataTypes.DATE,
    },
  });

  Tache.belongsTo(require("./projet"), { foreignKey: "projet_id" });
  Tache.belongsTo(require("./utilisateur"), { foreignKey: "utilisateur_id" });

  return Tache;
};

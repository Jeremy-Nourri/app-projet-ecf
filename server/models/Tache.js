const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Tache = sequelize.define(
    "Tache",
    {
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
      utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateur",
          key: "id",
        },
      },
      projet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Projet",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Tache;
};

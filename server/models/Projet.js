const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Projet = sequelize.define(
    "Projet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      denomination: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      details: {
        type: DataTypes.TEXT,
      },
      utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateur",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Projet;
};

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
    },
    {
      freezeTableName: true,
    }
  );

  return Projet;
};

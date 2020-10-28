"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    static associate(models) {}
  }
  pokemon.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pokemon",
    }
  );
  return pokemon;
};

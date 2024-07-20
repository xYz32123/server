import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Transaction = sequelize.define("Transaction", {
  idtransactions: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  subcategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

await sequelize.sync();

export { sequelize, Transaction };

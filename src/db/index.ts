import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../config/db.config";
import Users from "../models/user.model";
import Product from "../models/product.model";
import Price from "../models/price.model";
import Variation from "../models/variation.model";
import Category from "../models/category.model";
import ProductCategory from "../models/product_category";

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
      dialect: dialect,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      },
      models: [Users, Product, Price, Variation, Category, ProductCategory]
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });
  }
}

export default Database;
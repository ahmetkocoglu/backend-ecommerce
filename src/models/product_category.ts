// import { Sequelize } from "sequelize";
import { Model, Table, Column, DataType, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey, Sequelize} from "sequelize-typescript"
import Product from "./product.model";
import Category from "./category.model";

@Table({ tableName: "product_category" })
export default class ProductCategory extends Model {
    @PrimaryKey
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: "id" })
    id!: number

    @ForeignKey(() => Product)
    @Column
    productId!: number;

    @ForeignKey(() => Category)
    @Column
    categoryId!: number;

    @CreatedAt
    @Column({ type: DataType.DATE, defaultValue: Sequelize.literal('NOW()')})
    createdAt!: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, defaultValue: Sequelize.literal('NOW()')})
    updatedAt!: Date;
}
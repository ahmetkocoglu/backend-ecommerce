import { Model, Table, Column, DataType, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript"
import Product from "./product.model"
import { Sequelize } from "sequelize";

@Table({ tableName: "prices" })
export default class Price extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: "id" })
    id!: number

    @Column({ type: DataType.DECIMAL(7, 2), field: "price" }) //12345,67
    price!: number

    @ForeignKey(() => Product)
    @Column
    productId!: number;

    @Column({ type: DataType.BOOLEAN, field: "confirm" })
    confirm!: true

    @CreatedAt
    @Column({ type: DataType.DATE, defaultValue: Sequelize.literal('NOW()')})
    createdAt!: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, defaultValue: Sequelize.literal('NOW()')})
    updatedAt!: Date;
}
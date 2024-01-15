import { Sequelize } from "sequelize";
import { Model, Table, Column, DataType, PrimaryKey, CreatedAt, UpdatedAt} from "sequelize-typescript"

@Table({ tableName: "products" })
export default class Product extends Model {
    @PrimaryKey
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: "id" })
    id!: number

    @Column({ type: DataType.STRING(150), field: "title"})
    title!: string

    @Column({ type: DataType.BOOLEAN, field: "confirm"})
    confirm!: true

    @CreatedAt
    @Column({ type: DataType.DATE, defaultValue: Sequelize.literal('NOW()')})
    createdAt!: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, defaultValue: Sequelize.literal('NOW()')})
    updatedAt!: Date;
}
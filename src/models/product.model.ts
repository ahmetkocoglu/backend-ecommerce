import { Table, Column, DataType} from "sequelize-typescript"
import BaseModel from "./base.model";

@Table({ tableName: "products" })
export default class Product extends BaseModel {
    @Column({ type: DataType.STRING(150), field: "title"})
    title!: string

    @Column({ type: DataType.STRING(255), field: "description"})
    description!: string
}
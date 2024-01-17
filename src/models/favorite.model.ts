import { Table, Column, ForeignKey} from "sequelize-typescript"
import BaseModel from "./base.model";
import Product from "./product.model";
import Users from "./user.model";

@Table({ tableName: "favorites" })
export default class Favorite extends BaseModel {
    @ForeignKey(() => Product)
    @Column({field: "product_id"})
    productId!: number;

    @ForeignKey(() => Users)
    @Column({field: "user_id"})
    userId!: number;
}
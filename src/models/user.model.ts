import { Model, Table, Column, DataType } from 'sequelize-typescript'

@Table({ tableName: "users" })
export default class Users extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
    })
    id?: number

    @Column({ type: DataType.STRING(100), field: "email", unique: true })
    email?: string

    @Column({ type: DataType.STRING(100), field: "password"})
    password?: string

    @Column({type: DataType.BOOLEAN, field: "confirm"})
    confirm?: boolean
}
import { Table, Column, DataType, HasMany } from 'sequelize-typescript'
import BaseModel from './base.model'
import Rating from './rating.model'
import Coupon from './coupon.model'
import Favorite from './favorite.model'

@Table({ tableName: "users" })
export default class Users extends BaseModel {
    @Column({ type: DataType.STRING(150), field: "name" })
    name!: string

    @Column({ type: DataType.STRING(100), field: "email", unique: true })
    email!: string

    @Column({ type: DataType.STRING(100), field: "password"})
    password!: string

    @HasMany(() => Rating, 'user_id')
    ratings: Rating[] | undefined

    @HasMany(() => Coupon, 'user_id')
    coupons: Coupon[] | undefined

    @HasMany(() => Favorite, 'user_id')
    Favorites: Favorite[] | undefined
}
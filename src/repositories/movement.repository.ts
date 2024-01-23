import Movement from "../models/movement.model"

interface IMovementRepository {
    list(): Promise<Array<Movement>>;
    insert(
        productId: number, 
        userId: number, 
        processType: string, 
        price: number, 
        discountPrice: number, 
        quantity: number, 
        tax: number, 
        total: number, 
        description: string
    ): Promise<Movement | null>;
}

class MovementRepository implements IMovementRepository {
    async list(): Promise<Array<Movement>>{
        try {
            return await Movement.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        productId: number, 
        userId: number, 
        processType: string, 
        price: number, 
        discountPrice: number, 
        quantity: number, 
        tax: number, 
        total: number, 
        description: string
    ): Promise<Movement | null>{
        try {
            return Movement.create({
                productId, userId, processType, price, discountPrice, quantity, tax, total, description
            })
        } catch (error) {
            throw new Error("error")
        }
    }
}

export default new MovementRepository()
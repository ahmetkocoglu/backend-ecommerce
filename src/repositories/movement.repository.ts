import Movement from "../models/movement.model"

interface IMovementRepository {
    row(productId: number): Promise<Movement | null>;
    list(userId: number): Promise<Array<Movement>>;
    basket(userId: number): Promise<Array<Movement>>;
    payHeader(userId: number): Promise<Number>;
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
    async row(productId: number): Promise<Movement | null> {
        console.log(productId);

        return await Movement.findOne({ where: { productId: productId } })
    }
    async list(userId: number): Promise<Array<Movement>> {
        try {
            return await Movement.findAll({ where: { userId } })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async basket(userId: number): Promise<Array<Movement>> {
        try {
            return await Movement.findAll({ where: { userId, process_type: 'basket' } })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async payHeader(userId: number): Promise<number> {
        try {
            const update = await Movement.update({process_type: 'pay'},{ where: { userId: userId, process_type: 'basket' } })
            console.log(update);
            
            return 1
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
    ): Promise<Movement | null> {
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
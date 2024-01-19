import Movement from "../models/movement.model"

interface IMovementRepository {
    list(): Promise<Array<Movement>>;
}

class MovementRepository implements IMovementRepository {
    async list(): Promise<Array<Movement>>{
        try {
            return await Movement.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new MovementRepository()
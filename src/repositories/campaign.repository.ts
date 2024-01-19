import User from "../models/user.model"

interface IUserRepository {
    list(): Promise<Array<User>>;
}

class UserRepository implements IUserRepository {
    async list(): Promise<Array<User>>{
        try {
            return await User.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new UserRepository()
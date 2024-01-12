import User from "../models/user.model"

interface IUserRepository {
    login(email: string, password: string): Promise<User | null>;
    register(email: string, password: string): Promise<User | null>;
}

class UserRepository implements IUserRepository {
    async login(email: string, password: string): Promise<User | null>{
        try {
            return await User.findOne({where: {email, password}})
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }

    async register(email: string, password: string): Promise<User | null>{
        try {
            return await User.create({
                email, password, confirm: true
            })
        } catch (error) {
            throw new Error("Couldn't register")
        }
    }
}

export default new UserRepository()
import Comment from "../models/comment.model"

interface ICommentRepository {
    list(): Promise<Array<Comment>>;
}

class CommentRepository implements ICommentRepository {
    async list(): Promise<Array<Comment>>{
        try {
            return await Comment.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CommentRepository()
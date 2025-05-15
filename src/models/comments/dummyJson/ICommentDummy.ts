export interface ICommentDummy {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: ICommentUser;
}

interface ICommentUser {
    id: number;
    username: string;
    fullName: string;
}

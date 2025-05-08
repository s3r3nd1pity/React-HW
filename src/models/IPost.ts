export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReaction;
    views: number;
    userId: number;
}

interface IReaction {
    likes: number;
    dislikes: number;
}
export interface IPostDummy {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IPostReactions;
    views: number;
    userId: number;
}

interface IPostReactions {
    likes: number;
    dislikes: number;
}

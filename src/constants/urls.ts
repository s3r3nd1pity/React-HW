export const jsonPHBaseUrl = "https://jsonplaceholder.typicode.com";
export const urlsPH = {
    users: {
        allUsers: jsonPHBaseUrl + "/users",
        byId: (id: number) => jsonPHBaseUrl + "/users/" + id,
    },
    posts: {
        allPosts: jsonPHBaseUrl + "/posts",
        byId: (id: number) => jsonPHBaseUrl + "/posts/" + id,
    },
    todos: {
        allTodos: jsonPHBaseUrl + "/todos",
        byId: (id: number) => jsonPHBaseUrl + "/todos/" + id,
    }
}

export const dummyJsonBaseUrl = "https://dummyjson.com";
export const urlsDummy = {
    users: {
        allUsers: dummyJsonBaseUrl + "/users",
        byId: (id: number) => dummyJsonBaseUrl + "/users/" + id,
    },
    posts: {
        allPosts: dummyJsonBaseUrl + "/posts",
        byId: (id: number) => dummyJsonBaseUrl + "/posts/" + id,
    },
    todos: {
        allTodos: dummyJsonBaseUrl + "/todos",
        byId: (id: number) => dummyJsonBaseUrl + "/todos/" + id,
    },
    carts: {
        allCarts: dummyJsonBaseUrl + "/carts",
        byId: (id: number) => dummyJsonBaseUrl + "/todos/" + id,
        byUserId: (id: number) => dummyJsonBaseUrl + "/carts/user/" + id
    }
}
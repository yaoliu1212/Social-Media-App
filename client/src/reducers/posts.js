const postsReducers = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // console.log("payload: " + action.payload)
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
        case 'Like':
            return posts.map((post) => post._id === action.payload._id ? post = action.payload : post);
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export { postsReducers };
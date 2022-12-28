const postsReducers = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // console.log("payload: " + action.payload)
            return action.payload[0];
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

export { postsReducers };
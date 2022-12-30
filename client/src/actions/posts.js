import * as api from '../api';

// Action Creators: a function that returns an async func
export const getPosts = () => async (dispatch) => {
    try {
        // first get response from api, response always has data
        const { data } = await api.fetchPosts();
        // console.log("data: " + data)
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        // console.log("getting");
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (currentId, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(currentId, updatedPost);
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        // console.log("updating");
        console.log(error);
    }
};

export const deletePost = (currentId) => async (dispatch) => {
    try {
        await api.deletePost(currentId);
        dispatch({ type: 'DELETE', payload: currentId });
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (currentId) => async (dispatch) => {
    try {
        const { data } = await api.likePost(currentId);
        // console.log("client side:");
        // console.log(data);
        dispatch({ type: 'Like', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
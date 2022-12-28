import * as api from '../api';

// Action Creators: a function that returns an async func
const getPosts = () => async (dispatch) => {
    try {
        // first get response from api, response always has data
        const { data } = await api.fetchPosts();
        // console.log("data: " + data)
        dispatch({ type: 'FETCH_ALL', payload: [data] });
    } catch (error) {
        console.log(error.message);
    }
}
export default getPosts;
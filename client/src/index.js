import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/posts.js'
import App from './App';

const store = configureStore({
    reducer: {
        postsReducer,
    }
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
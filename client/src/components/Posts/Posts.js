import React from 'react'
import Post from './Post/Post'
import useStyles from './stylesPosts'
import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector((state) => state.postsReducers);
    const classes = useStyles();

    console.log(posts);
    return (
        <>
            <div>Posts</div>
            <Post />
            <Post />
        </>

    )
}

export default Posts
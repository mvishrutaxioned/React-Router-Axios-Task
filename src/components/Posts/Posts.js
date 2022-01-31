import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        for(var i=1; i<=10; i++) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then((res) => setPosts(prev => [...prev, res.data]))
            .catch(e => console.error(e))
        }
    }

    return (
        <div className="posts">
            <div className="wrapper">
                <h2>Posts</h2>
                <ul className="post-list">
                {posts.map(post => {
                return (
                    <Post key={Math.floor(Math.random() * 100000)} post={post} />
                )
                })}
                </ul>
            </div>
        </div>
    );
};

export default Posts;

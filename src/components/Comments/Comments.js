import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        for(var i=1; i<=10; i++) {
            axios.get(`https://jsonplaceholder.typicode.com/comments/${i}`)
            .then((res) => setComments(prev => [...prev, res.data]))
            .catch(e => console.error(e))
        }
    }

    return (
        <div className="comments">
            <div className="wrapper">
                <h2>Comments</h2>
                <ul className="comment-list">
                {comments.map(comment => {
                return (
                    <Comment key={Math.floor(Math.random() * 100000)} comment={comment} />
                    )
                })}
                </ul>
            </div>
        </div>
    );
};

export default Comments;

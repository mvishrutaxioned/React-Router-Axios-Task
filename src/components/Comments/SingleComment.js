import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleComment = () => {
    useEffect(() => {
        fetchSingleComment();
      }, []);
    
      const params = useParams();
      const [comment, setComment] = useState([]);
      const navigate = useNavigate();
    
      const fetchSingleComment = async () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
        .then(res => setComment(res.data))
        .catch(e => e)
      };
    
      return (
        <div className="wrapper sp">
            <h2>Single Comment</h2>
            <div className="singleComment">
                <p><strong>Id:</strong> {comment.id}</p>
                <p><strong>Name:</strong> {comment.name}</p>
                <p><strong>Email:</strong> {comment.email}</p>
                <p><strong>Body:</strong> {comment.body}</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>  
        </div>
      );
};

export default SingleComment;

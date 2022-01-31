import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SinglePost = () => {
    useEffect(() => {
        fetchSinglePost();
      }, []);
    
      const params = useParams();
      const [post, setPost] = useState([]);
      const navigate = useNavigate();
    
      const fetchSinglePost = async () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res => setPost(res.data))
        .catch(e => e)
      };
    
      return (
        <div className="wrapper sp">
            <h2>Single Post</h2>
            <div className="singlePost">
                <p><strong>Id:</strong> {post.id}</p>
                <h2><strong>Title:</strong> {post.title}</h2>
                <h2><strong>Body:</strong> {post.body}</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>  
        </div>
      );
};

export default SinglePost;

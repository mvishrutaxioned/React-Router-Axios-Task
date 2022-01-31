import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SinglePhoto = () => {
    useEffect(() => {
        fetchSinglePhoto();
      }, []);
    
      const params = useParams();
      const [photo, setPhoto] = useState([]);
      const navigate = useNavigate();
    
      const fetchSinglePhoto = async () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
        .then(res => setPhoto(res.data))
        .catch(e => e)
      };
    
      return (
        <div className="wrapper ps">
            <h2>Single Photo</h2>
            <div className="singlePhoto">
              <figure>
                <img src={photo.url} alt="Photo" />
              </figure>
              <p><strong>Id:</strong> {photo.id}</p>
              <h2><strong>Title:</strong> {photo.title}</h2>
              <h2><strong>Body:</strong> {photo.body}</h2>
              <button onClick={() => navigate(-1)}>Go Back</button>
            </div>  
        </div>
      );
};

export default SinglePhoto;

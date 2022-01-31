import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleAlbum = () => {
    useEffect(() => {
      fetchSingleAlbum();
    }, []);
  
    const params = useParams();
    const [album, setAlbum] = useState([]);
    const navigate = useNavigate();
  
    const fetchSingleAlbum = async () => {
      axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
      .then(res => setAlbum(res.data))
      .catch(e => e)
    };
  
    return (
      <div className="wrapper sa">
          <h2>Single Album</h2>
          <div className="singleAlbum">
              <p><strong>Id:</strong> {album.id}</p>
              <h2><strong>Title:</strong> {album.title}</h2>
              <button onClick={() => navigate(-1)}>Go Back</button>
          </div>  
      </div>
    );
};

export default SingleAlbum;

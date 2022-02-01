import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleCard = () => {
    useEffect(() => {
        fetchSingleCard();
      }, []);
    
      const params = useParams();
      const [card, setCard] = useState([]);
      const navigate = useNavigate();
      const title = (params.term).slice(0,1).toUpperCase() + (params.term).slice(1, (params.term).length);
    
      const fetchSingleCard = async () => {
        axios.get(`https://jsonplaceholder.typicode.com/${params.term}/${params.id}`)
        .then(res => setCard(res.data))
        .catch(e => e)
      };
    
      return (
        <div className="wrapper sc">
            <h2>Single {title} Card</h2>
            <div className="singleCard">
            {
                params.term === 'photos' ? 
                    <figure>
                        <img src={card.url} alt="Card" />
                    </figure>
                :
                ''
            }
                <p><strong>Id:</strong> {card.id}</p>
            {
                params.term === 'comments' ?
                <>
                    <p><strong>Name:</strong> {card.name}</p>
                    <p><strong>Email:</strong> {card.email}</p>
                </> :
                <p><strong>Title:</strong> {card.title} </p>
            }
            { params.term === "photos" ? '' : params.term === 'albums' ? '' : <p><strong>Body:</strong> {card.body}</p> }
              <button onClick={() => navigate(-1)}>Go Back</button>
            </div>  
        </div>
      );
};

export default SingleCard;

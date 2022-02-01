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
        <div className="wrapper">
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
                <h2><strong>Title:</strong> {card.title} </h2>
            }
            { params.term !== 'albums' ? <h2><strong>Body:</strong> {card.body}</h2> : '' }
              <button onClick={() => navigate(-1)}>Go Back</button>
            </div>  
        </div>
      );
};

export default SingleCard;

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = ({ card }) => {

    const params = useParams();

    return (
        <li className='card'>
            {
                params.term === 'photos' ? 
                    <figure>
                        <img src={card.url} alt="card" />
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
            <Link to={`/${params.term}/${card.id}`}>Show More</Link>
        </li>  
    );
};

export default Card;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommonCard from './CommonCard';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const params = useParams();
    const title = (params.term).slice(0,1).toUpperCase() + (params.term).slice(1, (params.term).length);

    useEffect(() => {
        fetchCards(params.term);
    }, []);

    const fetchCards = (str) => {
        axios.get(`https://jsonplaceholder.typicode.com/${str}`)
        .then((res) => setCards(res.data))
        .catch(e => console.error(e))
    }

    return (
        <div className="cards">
            <div className="wrapper">
                <h2>{title} Cards</h2>
                <ul className="card-list">
                {cards.slice(0,10).map((card, i) => {
                return (
                    <CommonCard key={i} card={card} />
                    )
                })}
                </ul>
            </div>
        </div>
    );
};

export default Cards;

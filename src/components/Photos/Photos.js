import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo';

const Photos = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = () => {
        for(var i=1; i<=10; i++) {
            axios.get(`https://jsonplaceholder.typicode.com/photos/${i}`)
            .then((res) => setPhotos(prev => [...prev, res.data]))
            .catch(e => console.error(e))
        }
    }

    return (
        <div className="photos">
            <div className="wrapper">
                <h2>Photos</h2>
                <ul className="photo-list">
                {photos.map(photo => {
                return (
                    <Photo key={Math.floor(Math.random() * 100000)} photo={photo} />
                )
                })}
                </ul>
            </div>
        </div>
    );
};

export default Photos;

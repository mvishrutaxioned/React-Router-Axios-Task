import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Album from './Album';

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchAlbums();
    }, []);

    const fetchAlbums = () => {
        for(var i=1; i<=10; i++) {
            axios.get(`https://jsonplaceholder.typicode.com/albums/${i}`)
            .then((res) => setAlbums(prev => [...prev, res.data]))
            .catch(e => console.error(e))
        }
    }

    return (
        <div className="albums">
            <div className="wrapper">
                <h2>Albums</h2>
                <ul className="album-list">
                {albums.map(album => {
                return (
                    <Album key={Math.floor(Math.random() * 100000)} album={album} />
                )
                })}
                </ul>
            </div>
        </div>
    );
};

export default Albums;

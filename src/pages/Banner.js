import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import axios from '../axios';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState(null); // Initialize with null to handle no movie case

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        if (results.length > 0) {
          const randomIndex = Math.floor(Math.random() * results.length);
          setMovie(results[randomIndex]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
    <div className='bg'></div>
    <div 
      className='banner-section'
      style={{
        backgroundImage: movie ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` : 'none',
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat' // Prevent image from repeating
      }}
    >
      <div className='banner-wrapper'>
        {/* Content like title, description, or buttons can go here */}
        {movie && (
          <>
            <h1 className='banner-title'>{movie.title || movie.name || movie.original_name}</h1>
            {/* <p className='banner-description'>{movie.overview}</p> */}
            <button className='play-button'>Play</button>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default Banner;

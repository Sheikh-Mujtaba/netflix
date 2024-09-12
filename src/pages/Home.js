import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import axios from '../axios';
import requests from '../requests';

 function Home({title,fetchUrl ,isLarge}) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies,setMovies] =useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);  // Use custom axios instance to make the GET request
        console.log(request.data);
        setMovies(request.data.results);  // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);  // Log errors to the console
      }
    }

    fetchData();  // Call the function to fetch data when the component mounts
  }, [fetchUrl]);

  return (
    <div className='home-section' >
          <h2 style={{marginBottom:'1rem'}}>{title}</h2>
      

        <div className='home-wrapper'>
    
        

          {movies.length ? (
          <div className="movies" >
            {movies.map((movie, index) => (
              <div key={index}>
            
                <img
                  src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                  // width='213px'
                  
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading movies...</p>
        )}



        </div>
      
    </div>
  )
}
export default Home;
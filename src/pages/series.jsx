import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Popover, useModal, Button, Text } from "@nextui-org/react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carrusel from '../components/carrusel';

function series() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjliMGFlNzk4Yjc1OGEzZTYwN2MxOGQ5OGYyYTViMyIsInN1YiI6IjY0NGYxNWY5YzBhMzA4MDMwMTZmZDMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rjt_HZywl5urkwlrPKXTkg7HnYGzosfThSlIxsQPgq8',
              Accept: 'application/json',
            },
          }
        );
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (

    <>
        <NavBar/>
    <Carrusel/>


     <div className='container-full'>
       

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {tvShows.map((tvShows) => (
      <Card key={tvShows.id} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${tvShows.poster_path}`}
          alt={tvShows.title}
        />
        <Card.Body>
          <Card.Title>{tvShows.title}</Card.Title>

      
        
      <Popover>
    <Popover.Trigger>
      <Button color="gradient">Más Info</Button>
    </Popover.Trigger>
    
    <Popover.Content >
     
      
      <Text css={{ p: "$10" }}>{tvShows.overview}</Text>
       <Button color="gradient">
          Reproducir
        </Button>
      
    </Popover.Content>
    
    
  </Popover>
  
  
          
          

         
        </Card.Body>
        
      </Card>

    
    ))}
  </div>
  </div>

  <Footer/>

    </>
   
    

  );
}

export default series;

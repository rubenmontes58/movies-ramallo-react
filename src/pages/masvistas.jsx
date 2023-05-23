import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Popover, useModal, Button, Text } from "@nextui-org/react";


function masvistas() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjliMGFlNzk4Yjc1OGEzZTYwN2MxOGQ5OGYyYTViMyIsInN1YiI6IjY0NGYxNWY5YzBhMzA4MDMwMTZmZDMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rjt_HZywl5urkwlrPKXTkg7HnYGzosfThSlIxsQPgq8',
              Accept: 'application/json',
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    


    <div className='container-full'>
       

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {movies.map((movies) => (
      <Card key={movies.id} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
        />
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>

      
        
      <Popover>
    <Popover.Trigger>
      <Button color="gradient">Más Info</Button>
    </Popover.Trigger>
    
    <Popover.Content >
     
      
      <Text css={{ p: "$10" }}>{movies.overview}</Text>
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
    
  

   
  );
}

export default masvistas;

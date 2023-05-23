import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Popover, useModal, Button, Text } from "@nextui-org/react";

function novedades() {
  const [movies, setMovies] = useState([]);
  const [minDate, setMinDate] = useState('2021-01-01');
  const [maxDate, setMaxDate] = useState('2021-12-31');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}`,
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
  }, [minDate, maxDate]);

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

export default novedades;

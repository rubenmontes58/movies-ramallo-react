import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Popover, useModal, Button, Text } from "@nextui-org/react";
















function Fetch() {
  
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const respuesta = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
        );
        const peliculas = await respuesta.json();
        setPeliculas(peliculas.results);
      } catch (error) {
        console.log(error);
      }
    };
    cargarPeliculas();
  }, [pagina]);


  const { setVisible, bindings } = useModal();

  return (

    

    
    





    <div className='container-full'>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {peliculas.map((pelicula) => (
        <Card key={pelicula.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={pelicula.title}
          />
          <Card.Body>
            <Card.Title>{pelicula.title}</Card.Title>

        
          
        <Popover>
      <Popover.Trigger>
        <Button color="gradient">Más Info</Button>
      </Popover.Trigger>
      
      <Popover.Content >
       
        
        <Text css={{ p: "$10" }}>{pelicula.overview}</Text>
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

export default Fetch;




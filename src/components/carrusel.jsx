import Carousel from 'react-bootstrap/Carousel';



function Carrusel() {
  return (
    <Carousel>
      
      <Carousel.Item>   

        

    <img
          
        
        height={250}
        style={{
         
         
         margin: 'auto',

        }}
        
        
          src="https://image.tmdb.org/t/p/w500//uGw4zPyiBAx9B1j9pKYWSvFiLug.jpg"
          alt="Third slide"
        />
        <img className='carrusel-img'
        
        height={250}
        
         
          src="https://image.tmdb.org/t/p/w500//fcFMd3HdyX7r5gtFwVnn2qr5Yhq.jpg"
          alt="First slide"
       
         
        />
        <img className='carrusel-img'
      
      height={250}
        
        src="https://image.tmdb.org/t/p/w500//dvvfHkEinSUWUPtJeWvxOx5hozm.jpg"
        alt="Second slide"
      />
             <img 
      
      height={250}
        
        src="https://image.tmdb.org/t/p/w500//hEA7bpWw5IRKOW2MVjvx46SWevU.jpg"
        alt="Second slide"
      />
       <img className='carrusel-img'
      
      height={250}
        
        src="https://image.tmdb.org/t/p/w500//t9VXZkgcxpIwfPUKAWOOONs0vHv.jpg"
        alt="Second slide"
      />
       
  
        
        
        <Carousel.Caption>
          <h3>Estrenos 2023</h3>
          <p>Peliculas, series y muscho más...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
     
      
      
     >
       

       

               <img
         
       
       height={250}
       style={{
        
        
        margin: 'auto',

       }}
       
       
         src="https://image.tmdb.org/t/p/w500//aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg"
         alt="Third slide"
       />
       <img className='carrusel-img'
       
       height={250}
       
        
         src="https://image.tmdb.org/t/p/w500//3P9QvWVN02Etn4kYGC702WVoXEb.jpg"
         alt="First slide"
      
        
       />
       <img className='carrusel-img'
     
     height={250}
       
       src="https://image.tmdb.org/t/p/w500//gh2bmprLtUQ8oXCSluzfqaicyrm.jpg"
       alt="Second slide"
     />
            <img 
     
     height={250}
       
       src="https://image.tmdb.org/t/p/w500//rLwhPkLkJ8GVPSBGVfCYm97f1Py.jpg"
       alt="Second slide"
     />
      <img className='carrusel-img'
     
     height={250}
       
       src="https://image.tmdb.org/t/p/w500//qcknZEeD71byJ3XSalDDZ5iHpNr.jpg"
       alt="Second slide"
     />
      
 
       
       
       <Carousel.Caption>
         <h3 className='estrenos'>Estrenos 2023</h3>
         <p className='estrenos2'>Peliculas, series y muscho más...</p>
       </Carousel.Caption>
     </Carousel.Item>

    
     
     

      
      
  
    </Carousel>
  );
}

export default Carrusel;
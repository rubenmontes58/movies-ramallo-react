import { NextUIProvider } from '@nextui-org/react';

import Carrusel from './components/carrusel';
import NavBar from './components/NavBar';
import Footer from './components/Footer';









function App() {
  return (

    
            <NextUIProvider > 
            
                      <NavBar/>
                      <Carrusel/>

                    <Footer />  
                
          
       

  </NextUIProvider>


   

  )
}

export default App

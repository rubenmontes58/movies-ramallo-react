
import { Container, Grid,  Text } from "@nextui-org/react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carrusel from '../components/carrusel';
function About() {
  return (
    <>

    
    <NavBar/>
    <Carrusel/>
   
      


    <Container
      color="#000"
      background="#fff"
      as="section"
      className="about"
    >
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} md={6} lg={6} xl={6} direction="column">
          <Text h2>Acerca de nosotros</Text>
          <Text p>
          Nuestro objetivo es proveer un servicio sencillo y confiable para que puedas disfrutar tus películas y series favoritas desde cualquier lugar y en cualquier momento. Creemos en la magia del cine y su poder de unir a las personas por medio de historias que trascienden culturas y fronteras.

Llevamos años trabajando arduamente para crear una plataforma segura, estable y de fácil uso con cientos de títulos que satisfagan los gustos de todo tipo de público. Actualizamos constantemente nuestro catálogo con los últimos estrenos de cine y las mejores series de televisión.

Todos los miembros de nuestro equipo son apasionados del séptimo arte y estamos comprometidos a ofrecer la mejor experiencia posible para nuestros clientes. Escuchamos sus sugerencias y comentarios para seguir mejorando nuestros servicios.

Disfrutamos brindándote momentos de diversión, inspiración e introspección a través del poder del relato audiovisual. Esperamos compartir esto con muchas más personas que, como tú, aprecian el valor de una buena historia.

¡Bienvenido! Es un placer tenerte con nosotros y estamos ansiosos por acompañarte en tu próxima sesión de cine y series.{' '}
          </Text>
        </Grid>
        <Grid xs={12} md={6} lg={6} xl={6} direction="column">
          <Text h3>Nuestra misión</Text>
          <Text p>
         

Proveer entretenimiento y acceso ilimitado a películas y series de calidad.
Brindar una amplia variedad de contenido de todo tipo para satisfacer los intereses y preferencias de todos nuestros clientes.
Ofrecer una plataforma segura, confiable y de rápida velocidad que en todo momento cumpla las expectativas de nuestros miembros.
Mantenernos al día con los últimos estrenos y series populares para que nuestros clientes siempre tengan algo nuevo para disfrutar.
Escuchar activamente sus comentarios y sugerencias para mejorar continuamente nuestros servicios.
Compartir el poder de las historias para inspirar, educar y unir a las personas a través del entretenimiento de calidad. 
Fomentar una cultura de pasión, innovación y excelencia en todo nuestro equipo para brindar la mejor experiencia posible a nuestros clientes.

En resumen, nuestra misión es simple pero significativa: proveer a nuestra audiencia acceso fácil y de calidad a increíbles películas y series para disfrute, diversión e inspiración.


          </Text>
        </Grid>
      </Grid.Container>
      <style jsx>{`
        .about {
          background: #000;
          padding: 2rem;
        }

        h2 {
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 0.5rem;
        }

        p {
          margin-top: 1rem;
        }
      `}</style>
    </Container>
    <Footer/>
    </>
  );
}

export default About;





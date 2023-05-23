import { Container, Grid,Text,Input,Button } from "@nextui-org/react";
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carrusel from '../components/carrusel';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu servidor usando fetch u otra librería
    // y luego establecer submitted a true para mostrar un mensaje de éxito
    setSubmitted(true);
  };

  return (

    <div>
          <NavBar/>
    <Carrusel/>
    
     <Container
      color="#000"
      background="#fff"
      as="section"
      className="contact"
    >
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} md={6} lg={6} xl={6} direction="column">
          <Text h2>Contacto</Text>
          <Text p>
            Si tienes alguna pregunta o comentario, por favor completa el
            siguiente formulario y nos pondremos en contacto contigo lo antes
            posible.
          </Text>
        </Grid>
        <Grid xs={12} md={6} lg={6} xl={6} direction="column">
          {submitted ? (
            <Text p>
              Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
            </Text>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
                label="Nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <Input
                label="Mensaje"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                multiline
              />
              <Button color="primary" variant="contained" type="submit">
                Enviar
              </Button>
            </form>
          )}
        </Grid>
      </Grid.Container>
      <style jsx>{`
        .contact {
          background: #fff;
          padding: 2rem;
        }

        h2 {
          margin-bottom: 1rem;
          
        }

        p {
          margin-top: 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        form > * {
          margin-bottom: 1rem;
        }
      `}</style>
    </Container>

    <Footer/>
    </div>
  );
    
   
}

export default Contact;

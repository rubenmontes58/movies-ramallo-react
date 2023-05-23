import { Container, Grid, Link, Text } from "@nextui-org/react";




function Footer() {
  return (
    <Container
      color="#fff"
      background="#000"
      as="footer"
      className="footer"
    >
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} md={4} lg={4} xl={4} direction="column">
          <Text h3>Movies Ramallo Store</Text>
          <Text p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem at ligula pharetra pretium.
          </Text>
        </Grid>
        <Grid xs={12} md={4} lg={4} xl={4} direction="column">
          <Text h4>Enlaces útiles</Text>
          <Link href="/movies">Películas</Link>
          <Link href="/series">Series</Link>
          <Link href="/novedades">Novedades</Link>
          <Link href="/masvitas">Las más Vistas</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contactos</Link>
        </Grid>
        <Grid xs={12} md={4} lg={4} xl={4} direction="column">
          <Text h4>Contacto</Text>
          <Link href="mailto:info@moviesramallostore.com">
            info@moviesramallostore.com
          </Link>
          <Link href="tel:3407466001">3407466001</Link>
        </Grid>
      </Grid.Container>
      <Text p>
        © {new Date().getFullYear()} Movies Ramallo Store. Todos los derechos
        reservados.
      </Text>
      <style jsx>{`
        .footer {
          padding: 2rem;
          background: #000;
        }

        a {
          margin-bottom: 0.5rem;
          color: #fff;
        }

        h3,
        h4 {
          margin-bottom: 1rem;
          color: #fff;
        }

        p {
          margin-top: 1rem;
          color: #fff;
         
        }
      `}</style>
    </Container>
  );
}

export default Footer;

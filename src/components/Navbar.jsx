import { Link, Button, Grid } from "@nextui-org/react";




function NavBar() {
  return (


<>

 

    <Grid.Container gap={2} >
      <Grid>
     
      
          <Link href="/">
       Home
      </Link >
       
      </Grid>
     
      <Grid>
     
    
         <Link href="/series">
      Series
     </Link>
      
     </Grid>
     <Grid>
     
     
         <Link href="/masvistas">
      Las más Vistas
     </Link>
     
     </Grid>
     <Grid>
     
     
         <Link href="/novedades">
      Novedades
     </Link>
     
     </Grid>
     <Grid>
     
     
         <Link href="/about">
      About
     </Link>
      
     </Grid>
     <Grid>
     
    
         <Link href="/contact">
      Contacto
     </Link>
      
     </Grid>
    </Grid.Container>

    </>
    
  )
}

export default NavBar

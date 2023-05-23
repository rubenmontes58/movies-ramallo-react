import { Link, Button, Grid } from "@nextui-org/react";




function NavBar() {
  return (



<div>
    <Grid.Container gap={2} >
      <Grid>
      <Button color="warning" auto>
     
      
          <Link href="/">
       Home
      </Link >
      </Button>
       
      </Grid>
     
      <Grid>
      <Button color="warning" auto>
     
    
         <Link href="/series">
      Series
     </Link>
     </Button>
    
     </Grid>
     <Grid>

     <Button color="warning" auto>
     
     
         <Link href="/masvistas">
      Las más Vistas
     </Link>
     </Button>
     
     </Grid>
     <Grid>
     <Button color="warning" auto>
     
         <Link href="/novedades">
      Novedades
     </Link>
     </Button>
     
     </Grid>
     <Grid>
     
     <Button color="warning" auto>
     
         <Link href="/about">
      Mis Favoritas
     </Link>
     </Button>
      
     </Grid>
       <Grid>
     
     <Button color="warning" auto>
     
         <Link href="/about">
      About
     </Link>
     </Button>
      
     </Grid>
     <Grid>
     
     <Button color="warning" auto>
         <Link href="/contact">
         
                
      Contacto
     </Link>
       </Button>
     </Grid>
    </Grid.Container>
</div>

 



 
    
  )
}

export default NavBar

import React from 'react'
import {Button, Image, Segment} from 'semantic-ui-react'
import cocktailKitsCards from '../pages/CocktailKitsCards'
import NegroniImage from '../images/Negroni.jpeg'
import { useRouter } from 'next/router'




const Home = () => {
  const router = useRouter()

  return(
    
    <div className='home-page'>
     <Segment  vertical textAlign='center'>
       <h1>ASSEMBLY</h1>
       <p><i>noun</i></p>
       <p>A group of people gathered together in one place for a common purpose.</p>
    
     </Segment>
      <Button class="ui primary button" onClick={() => router.push('/cocktailKitsCards')} >
        Cocktail Kits
      </Button>
      <Segment  vertical textAlign='center'>
      <Image
              fluid
              src={NegroniImage}
              alt="negroni"
      />
               
      </Segment>
    </div>
  )
}

export default Home
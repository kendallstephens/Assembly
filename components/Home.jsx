import React from 'react'
import {Container, Image, Segment} from 'semantic-ui-react'


const Home = () => {

  return(
    
    <div className='home-page'>
     {/* <img className='main-img' alt = 'main'/> */}

     <Segment  vertical textAlign='center'>
       <Container text>
       <h1>ASSEMBLY</h1>
       <p></p>
       </Container>
     </Segment>
      <Container>
      <Segment  vertical textAlign='center'>
      <Image 
                fluid
            
               
                 />
          </Segment>
        </Container>
     
       
    </div>
  )
}

export default Home
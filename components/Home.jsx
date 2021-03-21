import React from 'react'
import {Container, Image, Segment} from 'semantic-ui-react'
import NegroniImage from '../images/Negroni.jpeg'



const Home = () => {

  return(
    
    <div className='home-page'>
     {/* <img className='main-img' alt = 'main'/> */}

     <Segment  vertical textAlign='center'>
       {/* <Container text> */}
       <h1>ASSEMBLY</h1>
       <p><i>noun</i></p>
       <p>A group of people gathered together in one place for a common purpose.</p>
       {/* </Container> */}
     </Segment>
      {/* <Container> */}
      <Segment  vertical textAlign='center'>
      <Image
              fluid
              src={NegroniImage}
              alt="negroni"
      />
               
          </Segment>
        {/* </Container> */}
     
       
    </div>
  )
}

export default Home
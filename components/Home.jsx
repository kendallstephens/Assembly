import React from 'react'
import Footer from './Footer'
import {Container, Image, Segment} from 'semantic-ui-react'
import home from '../Images/home.jpg'
import '../App.css'


const Home = () => {





  return(
    
    <div className='home-page'>
     {/* <img className='main-img' alt = 'main'/> */}

     <Segment  vertical textAlign='center'>
       <Container text>
       <h1>ASSEMBLY</h1>
       </Container>
     </Segment>
      <Container>
      <Segment  vertical textAlign='center'>
      <Image 
                fluid
            
                src={home}
                 />
          </Segment>
        </Container>
        <Footer />
       
    </div>
  )
}

export default Home
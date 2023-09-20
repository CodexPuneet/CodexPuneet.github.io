import { Box,  Center,  Heading, Text, } from '@chakra-ui/react'
import React from 'react'
import Pic from '../Images/image2.jpg';

function About() {
  return (
    <Box pt={{base: 10, md:120}}   id='about' >
      <Heading fontSize={{base:40, md:50}} textAlign={'center'} style={{color:'rgb(243, 14, 79)'}}>About Me</Heading>
      <Center mt={{base:'50px',md:100}} >
   
    <figure>
      <Box ><img  className='profile1' src={Pic} alt="Pic" /></Box>
    </figure>
    
      </Center>
      <Box w={{base:'92%',md:'90%', lg:'80%'}} mt={{base:'40px',md:'50px'}}  ml={{base:'15px', md:'42px',lg:'150px'}} lineHeight={{base:'7',md:'10'}} >
      <Text fontSize={{base:15,md:17,lg:21}} textAlign={'justify'}  >
       
      Hello Viewers! Happy to see You Guys Here. So, I am Electronics and Communication Engineer and am excited to enter the Teach World i.e IT Sector. The Journey from Hardware to Software has given me the ultimate experience of life. Now with the help of Masai School, I am an Energetic and passion-driven MERN Stack Developer having 1200+ hours of intensive Coding experience and able to write clean, reusable, and optimized code. Also, have a more profound knowledge of Data Structure Algorithms. I am looking for an opportunity to work in a challenging work environment to develop skills and a deeper understanding of Web development.
       </Text>
      </Box>
    </Box> 
  )
}

export default About
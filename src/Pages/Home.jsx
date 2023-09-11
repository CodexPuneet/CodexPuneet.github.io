import React from 'react'
import wave from '../Images/wave.gif'
import Typewriter from 'typewriter-effect/dist/core';
import { Box, Flex, Grid, Img, Text } from '@chakra-ui/react';
import Pic from '../Images/image.jpg';
import './Home.css'



const Home = () => {
  const typeWriter = () => {
    const type = new Typewriter('#typer', {
      loop: true,
      delay: 105,
    });
    type.typeString('Electronics & Communication Engineer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Coder who loves new Technology')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Full Stack Web Developer')
      .pauseFor(2000)
      .deleteAll()
      .start();
  };
  const style={
    "bgGradient": 'linear(to-r, green.200, pink.500)'
    // 
  }
  
 React.useEffect(() => {
    typeWriter();
  }, []);
  return (
    <>
    <Grid w={{base:'97%',md:'70%'}}  templateColumns={{md:'1fr',lg:'1fr 1fr'}} m='5px auto 300px' pt={100}>
      <Box p={10} minW={{md:'100%',lg:'500px'}} >
      <Text  fontWeight={500} fontSize={{base:'27px',md:'35px',lg:'40px'}} >Hi Folks, <img  src={wave} width={80} alt="logo" /> I'm <span  id='grad'>Puneet Srivastava</span></Text>
      <Text fontWeight={530} fontSize={{base:'20px',md:'24px',lg:'28px'}} >a <span style={{color:'red'}} id='typer'></span></Text>
      <Text fontSize={18}>A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact. </Text>
      <a href='./Puneet_Srivastava_Resume.pdf' download  >
      <Flex w={'200px'}gap={2} my='4'p={2} borderRadius={'2xl'} fontSize='20px' alignItems='center' justifyContent={'center'} className='downloadbtn' 
      onClick={()=>{window.open("https://drive.google.com/file/d/10jdfxVfRRfSMSsD4bQO0p9niSSbcfxcn/view","_blank",'noopener,noreferrer')}}
      >
        <Img src='https://i.ibb.co/MRdbgtQ/download.png' w={10} h={10} mr={2} />
         Resume
      </Flex>
      </a>
      
 
      </Box>
      <Flex justifyContent={'center'} alignItems='center' >
      
      <Box ><img className='profile' src={Pic} alt="" /></Box>
   
      </Flex>
    </Grid>
    </>
  )
}

export default Home;
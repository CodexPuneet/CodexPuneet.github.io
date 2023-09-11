import React from 'react'
import { Flex, VStack, Spacer } from '@chakra-ui/layout';
import {  IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import { Box} from '@chakra-ui/react';
import { Link } from "react-scroll";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Skills from '../Pages/Skills';
import Experience from '../Pages/Experience'
import { Link as IconLink } from '@chakra-ui/react';
import { useState } from 'react';
import Menu from './Menu';
import {FaBars} from "react-icons/fa"




const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [state, setState] = useState('< My Portfolio />')
  const handleChange=()=>{
    if(state === '< My Portfolio />')
    return  setState('< Puneet Srivastava />')
    else
    return  setState('< My Portfolio />')
  }
  

  return (
    <Box > <VStack p={4} pos="sticky" top={-1} zIndex={2} bg={'rgb(26,32,44)'}>
    <Flex w="100%" border={"1px solid white"}>
    <Box p={1} display={{sm:"block", md:"none"}}><IconButton icon={<Menu/>}></IconButton> 
    </Box>
      <Box fontSize={{ base: '22px', md: '27px', lg: '34px' }}><h1 className='hover:scale-110 duration-200 font-bold font-signature ml-2 mt-2  text-cyan-400'><Link activeClass="active" onClick={handleChange} smooth spy to="home">{state}</Link></h1></Box>
      <Spacer></Spacer>
      <Flex mt={2} display={{base:"none", md:"block"}} >
      <IconButton  mr={18} p={{md:1, lg:7}} className=' hover:scale-110 duration-200 font-signature text-cyan-400' bg={'rgb(26,32,44)'} ><Link activeClass="active" smooth spy to="home">Home</Link></IconButton>
      <IconButton mr={18} p={{md:1, lg:8}} className=' hover:scale-110 duration-200 font-signature text-cyan-400'  bg={'rgb(26,32,44)'}><Link activeClass="active" smooth spy to="about">About Me</Link></IconButton>
      <IconButton mr={18} p={{md:1, lg:8}} className=' hover:scale-110 duration-200 font-signature text-cyan-400' bg={'rgb(26,32,44)'} ><Link activeClass="active" smooth spy to="skills">Skills</Link></IconButton>
      <IconButton mr={18} p={{md:1, lg:8}} className=' hover:scale-110 duration-200 font-signature text-cyan-400'  bg={'rgb(26,32,44)'}><Link activeClass="active" smooth spy to="project">Project</Link></IconButton>
      <IconButton mr={18} p={{md:1, lg:8}} className=' hover:scale-110 duration-200 font-signature text-cyan-400'  bg={'rgb(26,32,44)'}><Link activeClass="active" smooth spy to="contact">Contact</Link></IconButton>
      <IconButton mr={18} p={{md:1, lg:8}} className=' hover:scale-110 duration-200 font-signature text-cyan-400' bg={'rgb(26,32,44)'} ><a href='./Puneet_Srivastava_Resume.pdf' download >
        <button onClick={()=>{window.open("https://drive.google.com/file/d/10jdfxVfRRfSMSsD4bQO0p9niSSbcfxcn/view","_blank",'noopener,noreferrer')}}>
        Resume
        </button>
      
         </a></IconButton>
      </Flex>
      <Spacer></Spacer>

      <Box mt={3} display={{base:"none", lg: 'block'}}>
       <IconLink href='https://github.com/CodexPuneet' target='_blank' className=' hover:scale-110 duration-200'> <IconButton icon={<FaGithub />} isRound={true}></IconButton></IconLink>
      <IconLink href='https://www.linkedin.com/in/puneet-srivastava7/' target='_blank' className=' hover:scale-110 duration-200'><IconButton icon={<FaLinkedin />} isRound={true}></IconButton></IconLink>
      <IconLink href='https://www.instagram.com/crazy_engineer/' target='_blank' className=' hover:scale-110 duration-200'><IconButton icon={<FaInstagram />} isRound={true}></IconButton></IconLink>
      </Box>
      
   <IconButton  mt={{base:1,lg:3}} mr={1} ml={8} color="cyan.400" icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
   

  
     </Flex>
   </VStack>
   
   <div id="home"><Home /></div>
   <div id="about"><About /></div>
  <div id="experience"><Experience/></div>
   <div id="skills"><Skills/></div>
   <div id="project"><Project /></div>
   <div id="contact"><Contact /></div>
   </Box>
  )
}

export default NavBar
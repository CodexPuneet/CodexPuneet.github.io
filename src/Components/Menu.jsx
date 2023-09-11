import {   Box,  Menu,  MenuButton,  MenuList , Text, useDisclosure, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-scroll'

function Menus() {

  return (
    <Menu >
    <MenuButton
      display={{sm:'block',md:'none'}}
      variant="ghost"
      
      borderRadius={5}
      aria-label="Courses"
      fontWeight="normal"
      
      bg='cyan.400'
      p={2}
    >
      <FaBars />
    </MenuButton>
    <MenuList p={4}  border={"2px solid white"}    >
    
      <Box textAlign={"left"}>
        
     
        <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
        <MenuItem
        bg={"#2D3748"}
          p={2}
          fontWeight={600}
          className=' hover:scale-110 font-signature '
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "#FF6347",
            cursor: "pointer",
          }}
          mx={3}
        >
          About Me
        </MenuItem>
        </Link>
        
        <Link

            activeClass="active"  
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
        <MenuItem
          p={2}
          fontWeight={600}
          className=' hover:scale-110 font-signature '
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "#FF6347",
            cursor: "pointer",
          }}
          mx={3}
        >
          Skills
        </MenuItem>
        </Link>
        <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
        <MenuItem
          p={2}
          fontWeight={600}
          className=' hover:scale-110 font-signature '
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "#FF6347",
            cursor: "pointer",
          }}
          mx={3}
        >
          Projects
        </MenuItem>
        </Link>
        <a href='./Puneet_Srivastava_Resume.pdf' download>
        <MenuItem
          p={2}
          fontWeight={600}
          className=' hover:scale-110 font-signature '
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "#FF6347",
            cursor: "pointer",
          }}
          mx={3}
        >
           <button onClick={()=>{window.open("https://drive.google.com/file/d/133sXzhjMvI_z9-2lIGLfIQORx5cdiwrp/view?usp=share_link","_blank",'noopener,noreferrer')}}>
        Resume
        </button>
        </MenuItem>
        </a>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
        <MenuItem
          p={2}
          fontWeight={600}
          className=' hover:scale-170 font-signature'
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "#FF6347",
            cursor: "pointer",
          }}
          mx={3}
        >
          Contact
        </MenuItem>
        </Link>
       
     
      </Box>
    </MenuList>
  </Menu>
  )
}

export default Menus

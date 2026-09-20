import React from 'react'
import { Flex, Spacer, Box, IconButton, useColorMode, Link as IconLink, HStack, Button } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from "react-scroll";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Skills from '../Pages/Skills';
import Experience from '../Pages/Experience'
import Menu from './Menu';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const state = '< Puneet Srivastava />';

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'skills', label: 'Skills' },
    { to: 'project', label: 'Work & Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <Box>
      <Box
        pos="sticky"
        top={0}
        zIndex={100}
        px={{ base: 4, md: 8 }}
        py={3}
        bg={isDark ? 'rgba(11, 15, 25, 0.85)' : 'rgba(255, 255, 255, 0.9)'}
        backdropFilter="blur(16px)"
        borderBottom="1px solid"
        borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
        boxShadow={isDark ? '0 10px 30px -10px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.05)'}
        transition="all 0.3s ease"
      >
        <Flex maxW="1280px" mx="auto" alignItems="center">
          {/* Mobile Menu Button */}
          <Box display={{ base: 'block', md: 'none' }} mr={2}>
            <Menu />
          </Box>

          {/* Logo / Brand Name */}
          <Box cursor="pointer">
            <Link activeClass="active" smooth spy to="home">
              <Box
                as="span"
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight={700}
                className="font-signature"
                bgGradient="linear(to-r, #f30e4f, #38bdf8)"
                bgClip="text"
                letterSpacing="tight"
              >
                {state}
              </Box>
            </Link>
          </Box>

          <Spacer />

          {/* Desktop Nav Links */}
          <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((item) => (
              <Box
                key={item.to}
                as="span"
                px={3}
                py={1.5}
                borderRadius="md"
                fontSize="14px"
                fontWeight={600}
                color={isDark ? 'gray.300' : 'gray.700'}
                cursor="pointer"
                transition="all 0.2s ease"
                _hover={{
                  color: '#f30e4f',
                  bg: isDark ? 'rgba(243, 14, 79, 0.08)' : 'rgba(243, 14, 79, 0.06)',
                }}
              >
                <Link activeClass="active" smooth spy offset={-70} to={item.to}>
                  {item.label}
                </Link>
              </Box>
            ))}

            {/* Resume Button */}
            <Button
              as="a"
              href="./Puneet_Srivastava_Resume.pdf"
              download
              size="sm"
              ml={3}
              borderRadius="full"
              fontSize="13px"
              fontWeight={600}
              className="downloadbtn"
              px={4}
              onClick={() => {
                window.open('https://drive.google.com/file/d/10jdfxVfRRfSMSsD4bQO0p9niSSbcfxcn/view', '_blank', 'noopener,noreferrer');
              }}
            >
              Resume
            </Button>
          </HStack>

          <Spacer display={{ base: 'flex', md: 'none' }} />

          {/* Social Links & Theme Switcher */}
          <HStack spacing={2} ml={{ base: 2, md: 4 }}>
            <Box display={{ base: 'none', lg: 'flex' }}>
              <IconLink href="https://github.com/CodexPuneet" target="_blank" rel="noreferrer">
                <IconButton
                  aria-label="GitHub"
                  icon={<FaGithub />}
                  isRound
                  size="sm"
                  variant="ghost"
                  color={isDark ? 'gray.300' : 'gray.600'}
                  _hover={{ color: '#38bdf8', bg: isDark ? 'whiteAlpha.100' : 'blackAlpha.100' }}
                />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/puneet-srivastava7/" target="_blank" rel="noreferrer">
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  isRound
                  size="sm"
                  variant="ghost"
                  color={isDark ? 'gray.300' : 'gray.600'}
                  _hover={{ color: '#38bdf8', bg: isDark ? 'whiteAlpha.100' : 'blackAlpha.100' }}
                />
              </IconLink>
              <IconLink href="mailto:srivastavap714@gmail.com">
                <IconButton
                  aria-label="Email"
                  icon={<FaEnvelope />}
                  isRound
                  size="sm"
                  variant="ghost"
                  color={isDark ? 'gray.300' : 'gray.600'}
                  _hover={{ color: '#f30e4f', bg: isDark ? 'whiteAlpha.100' : 'blackAlpha.100' }}
                />
              </IconLink>
            </Box>

            <IconButton
              aria-label="Toggle Color Mode"
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound
              size="sm"
              variant="ghost"
              color={isDark ? 'yellow.300' : 'purple.600'}
              onClick={toggleColorMode}
              _hover={{ bg: isDark ? 'whiteAlpha.200' : 'blackAlpha.100' }}
            />
          </HStack>
        </Flex>
      </Box>

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
    </Box>
  )
}

export default NavBar
import { Flex, Spacer, Box, IconButton, useColorMode, HStack, Button } from '@chakra-ui/react';
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
    <Box pos="relative">
      <Box
        pos="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        px={{ base: 4, md: 8 }}
        py={3}
        bg={isDark ? 'rgba(11, 15, 25, 0.88)' : 'rgba(255, 255, 255, 0.92)'}
        backdropFilter="blur(16px)"
        borderBottom="1px solid"
        borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
        boxShadow={isDark ? '0 10px 30px -10px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.05)'}
        transition="all 0.3s ease"
      >
        <Flex maxW="1280px" mx="auto" alignItems="center">
          {/* Mobile Menu Button */}
          <Box display={{ base: 'block', md: 'none' }} mr={3}>
            <Menu />
          </Box>

          {/* Logo / Brand Name */}
          <Link activeClass="active" smooth spy offset={-80} to="home" style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <Box
              as="span"
              fontSize={{ base: '20px', md: '23px' }}
              fontWeight={700}
              className="font-signature nav-brand-logo"
              letterSpacing="tight"
              userSelect="none"
            >
              {state}
            </Box>
          </Link>

          <Spacer />

          {/* Desktop Nav Links */}
          <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((item) => (
              <Link
                key={item.to}
                activeClass="active"
                smooth
                spy
                offset={-80}
                to={item.to}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  as="span"
                  px={3}
                  py={1.5}
                  borderRadius="md"
                  fontSize="14px"
                  fontWeight={600}
                  color={isDark ? 'gray.300' : 'gray.700'}
                  cursor="pointer"
                  display="inline-block"
                  transition="all 0.2s ease"
                  _hover={{
                    color: '#f30e4f',
                    bg: isDark ? 'rgba(243, 14, 79, 0.08)' : 'rgba(243, 14, 79, 0.06)',
                  }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}

            {/* Resume Button */}
            <Button
              as="a"
              href="./Puneet_Srivastava_Resume.docx"
              download="Puneet_Srivastava_Resume.docx"
              size="sm"
              ml={3}
              borderRadius="full"
              fontSize="13px"
              fontWeight={600}
              className="downloadbtn"
              px={4}
            >
              Resume
            </Button>
          </HStack>

          <Spacer display={{ base: 'flex', md: 'none' }} />

          {/* Social Links & Theme Switcher */}
          <HStack spacing={2} ml={{ base: 2, md: 4 }}>
            <Box display={{ base: 'none', lg: 'flex' }} gap={2}>
              <IconButton
                as="a"
                href="https://github.com/CodexPuneet"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                icon={<FaGithub />}
                isRound
                size="sm"
                variant="ghost"
                color={isDark ? 'gray.300' : 'gray.600'}
                _hover={{ color: '#38bdf8', bg: isDark ? 'whiteAlpha.100' : 'blackAlpha.100' }}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/puneet-srivastava7/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                isRound
                size="sm"
                variant="ghost"
                color={isDark ? 'gray.300' : 'gray.600'}
                _hover={{ color: '#38bdf8', bg: isDark ? 'whiteAlpha.100' : 'blackAlpha.100' }}
              />
              <IconButton
                as="a"
                href="mailto:srivastavap714@gmail.com"
                aria-label="Email"
                icon={<FaEnvelope />}
                isRound
                size="sm"
                variant="ghost"
                color={isDark ? 'gray.300' : 'gray.600'}
                _hover={{ color: '#f30e4f', bg: isDark ? 'whiteAlpha.100' : 'blackAlpha.100' }}
              />
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

      {/* Spacer so content doesn't get hidden behind fixed navbar */}
      <Box h={{ base: "60px", md: "68px" }} />

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
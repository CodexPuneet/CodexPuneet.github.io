import { Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll'
import { handleResumeClick } from '../utils/resume'

function Menus() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const menuItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About Me' },
    { to: 'experience', label: 'Experience' },
    { to: 'skills', label: 'Skills' },
    { to: 'project', label: 'Work & Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Navigation Menu"
        icon={<FaBars />}
        variant="outline"
        size="sm"
        borderColor={isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}
        color={isDark ? 'gray.200' : 'gray.700'}
        _hover={{ bg: isDark ? 'whiteAlpha.200' : 'blackAlpha.100' }}
      />
      <MenuList
        bg={isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'}
        backdropFilter="blur(16px)"
        borderColor={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
        boxShadow="0 15px 35px -5px rgba(0, 0, 0, 0.3)"
        p={2}
        borderRadius="xl"
      >
        {menuItems.map((item) => (
          <Link
            key={item.to}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <MenuItem
              borderRadius="md"
              px={4}
              py={2.5}
              fontSize="14px"
              fontWeight={600}
              bg="transparent"
              color={isDark ? 'gray.200' : 'gray.700'}
              _hover={{
                bg: 'rgba(243, 14, 79, 0.12)',
                color: '#f30e4f',
              }}
              _focus={{
                bg: 'rgba(243, 14, 79, 0.12)',
                color: '#f30e4f',
              }}
            >
              {item.label}
            </MenuItem>
          </Link>
        ))}

        <MenuItem
          onClick={handleResumeClick}
          borderRadius="md"
          px={4}
          py={2.5}
          fontSize="14px"
          fontWeight={600}
          bg="rgba(243, 14, 79, 0.1)"
          color="#f30e4f"
          mt={1}
          _hover={{
            bg: '#f30e4f',
            color: 'white',
          }}
        >
          Download Resume
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Menus

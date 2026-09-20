import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core';
import { Box, Flex, Grid, Text, HStack, Badge, Button, useColorMode } from '@chakra-ui/react';
import { DownloadIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Pic from '../Images/image.jpg';
import './Home.css';
import { handleResumeClick } from '../utils/resume';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const typeWriter = () => {
    const type = new Typewriter('#typer', {
      loop: true,
      delay: 75,
      deleteSpeed: 45,
    });
    type.typeString('Senior QA Analyst (Functioning as QA Lead)')
      .pauseFor(2200)
      .deleteAll()
      .typeString('Cross-Channel Pharma & Diagnostics QA')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Full-Stack Engineer turned QA Leader')
      .pauseFor(2000)
      .deleteAll()
      .typeString('QA Automation & Compliance Systems Builder')
      .pauseFor(2000)
      .deleteAll()
      .start();
  };

  useEffect(() => {
    typeWriter();
  }, []);

  const highlights = [
    { label: 'Zero Escalations', value: '12+ Months' },
    { label: 'Monthly Asset Review', value: '430+' },
    { label: 'QA Team Leadership', value: '~12 Engineers' },
    { label: 'Review Time Saved', value: '30%+' },
  ];

  return (
    <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 8, md: 20 }} pb={{ base: 12, md: 20 }}>
      <Grid
        templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }}
        gap={{ base: 10, lg: 12 }}
        alignItems="center"
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Executive Badge */}
          <HStack spacing={2} mb={4} wrap="wrap">
            <Badge
              px={3}
              py={1.5}
              borderRadius="full"
              fontSize={{ base: '11px', md: '12px' }}
              fontWeight={700}
              className="badge-accent"
              letterSpacing="wide"
            >
              🛡️ REGULATED PHARMA & DIAGNOSTICS QA LEAD
            </Badge>
            <Badge
              px={3}
              py={1.5}
              borderRadius="full"
              fontSize={{ base: '11px', md: '12px' }}
              fontWeight={600}
              className="badge-cyan"
            >
              WPP Production India
            </Badge>
          </HStack>

          {/* Heading */}
          <Text
            fontSize={{ base: '30px', md: '44px', lg: '50px' }}
            fontWeight={800}
            lineHeight={{ base: '1.2', md: '1.15' }}
            color={isDark ? 'white' : 'gray.900'}
          >
            Hi, I'm <span id="grad">Puneet Srivastava</span>
          </Text>

          {/* Dynamic Role */}
          <Text
            mt={2}
            fontSize={{ base: '18px', md: '22px', lg: '26px' }}
            fontWeight={600}
            color={isDark ? 'gray.300' : 'gray.700'}
            minH={{ base: '56px', md: '38px' }}
          >
            I am a <span style={{ color: '#f30e4f', fontWeight: 700 }} id="typer"></span>
          </Text>

          {/* Executive Summary */}
          <Text
            mt={4}
            fontSize={{ base: '15px', md: '17px' }}
            lineHeight="1.75"
            color={isDark ? 'gray.300' : 'gray.600'}
            textAlign="justify"
          >
            Leading cross-channel Quality Assurance for regulated pharmaceutical and diagnostics digital media campaigns.
            Over 3+ years, I have sustained <strong>zero escalations and zero external defects for 12+ consecutive months</strong> across
            7+ digital channels. My software engineering background drives how I build proprietary QA automation tools,
            accelerating review cycles and eliminating systemic defects before deployment.
          </Text>

          {/* Action CTAs */}
          <Flex wrap="wrap" gap={4} mt={6} alignItems="center">
            <Button
              onClick={handleResumeClick}
              leftIcon={<DownloadIcon />}
              className="downloadbtn"
              size="lg"
              borderRadius="xl"
              px={6}
              fontSize="15px"
              bg="linear-gradient(135deg, #f30e4f 0%, #d40840 100%)"
              color="white !important"
              _hover={{
                bg: "linear-gradient(135deg, #ff1a5d 0%, #e00946 100%)",
                color: "white !important",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 28px rgba(243, 14, 79, 0.6)",
              }}
              boxShadow="0 6px 20px rgba(243, 14, 79, 0.4)"
            >
              Download Resume
            </Button>

            <Link activeClass="active" smooth spy offset={-70} to="experience">
              <Button
                rightIcon={<ArrowForwardIcon />}
                className="secondary-btn"
                size="lg"
                borderRadius="xl"
                px={6}
                fontSize="15px"
                color={isDark ? "#38bdf8 !important" : "#0284c7 !important"}
                bg={isDark ? "rgba(56, 189, 248, 0.08)" : "rgba(2, 132, 199, 0.08)"}
                border="1px solid"
                borderColor={isDark ? "rgba(56, 189, 248, 0.5)" : "rgba(2, 132, 199, 0.6)"}
                _hover={{
                  bg: isDark ? "rgba(56, 189, 248, 0.16)" : "rgba(2, 132, 199, 0.16)",
                  borderColor: isDark ? "#38bdf8" : "#0284c7",
                  transform: "translateY(-2px)",
                  boxShadow: isDark ? "0 8px 24px rgba(56, 189, 248, 0.3)" : "0 8px 24px rgba(2, 132, 199, 0.25)",
                }}
              >
                View Experience
              </Button>
            </Link>
          </Flex>

          {/* Key Stat Cards */}
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
            gap={3}
            mt={8}
            pt={6}
            borderTop="1px solid"
            borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
          >
            {highlights.map((h, i) => (
              <Box
                key={i}
                p={3}
                borderRadius="lg"
                className="stat-card-animated"
                bg={isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'}
                border="1px solid"
                borderColor={isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}
                textAlign="center"
                cursor="default"
              >
                <Text className="stat-number" fontSize={{ base: '18px', md: '22px' }} fontWeight={800} color="#f30e4f">
                  {h.value}
                </Text>
                <Text fontSize={{ base: '11px', md: '12px' }} color={isDark ? 'gray.400' : 'gray.600'} fontWeight={500} mt={0.5}>
                  {h.label}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>

        {/* Profile Image with subtle glow */}
        <MotionFlex
          w="full"
          justifyContent="center"
          alignItems="center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
            <img className="profile" src={Pic} alt="Puneet Srivastava" />
          </Box>
        </MotionFlex>
      </Grid>
    </Box>
  )
}

export default Home;
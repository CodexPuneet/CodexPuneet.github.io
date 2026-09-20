import React from 'react'
import { Box, Flex, Grid, Heading, Text, VStack, HStack, Badge, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Pic from '../Images/image2.jpg';

const MotionBox = motion(Box);

function About() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const pillars = [
    {
      icon: '🛡️',
      title: 'Regulated QA Leadership',
      description: 'Specializing in cross-channel QA for life sciences & diagnostics (Roche, J&J, GSK). Led teams of ~12 QA resources reviewing 430+ digital assets monthly with 0 escalations across 12+ consecutive months.',
      tags: ['7+ Digital Channels', 'Veeva Vault Sign-Off', 'EBU R128 Audio QC', 'Zero Escalations'],
    },
    {
      icon: '⚡',
      title: 'Automation & Tool Engineering',
      description: 'Leveraging full-stack MERN roots to build proprietary defect-prevention tools: Video QC, Banner QC, Email QC, and a centralized QA Hub for tracking KPIs and asset pipelines.',
      tags: ['30%+ Time Saved', 'Custom QC Scripts', 'QA Hub Dashboard', 'Process Automation'],
    },
  ];

  return (
    <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 24 }}>
      {/* Section Header */}
      <VStack spacing={2} textAlign="center" mb={{ base: 10, md: 16 }}>
        <Badge className="badge-accent" px={3} py={1} borderRadius="full" fontSize="12px" fontWeight={700}>
          PROFILE BACKGROUND
        </Badge>
        <Heading fontSize={{ base: '32px', md: '44px' }} fontWeight={800} color="#f30e4f">
          About Me
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }} color={isDark ? 'gray.400' : 'gray.600'} maxW="600px">
          The intersection of rigorous life-sciences compliance and full-stack software engineering.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: '1fr', lg: '0.8fr 1.2fr' }}
        gap={{ base: 10, lg: 12 }}
        alignItems="start"
      >
        {/* Left Column: Image & Snapshot Card */}
        <MotionBox
          w="full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box pos="relative" mb={6} display="flex" justifyContent="center" alignItems="center" w="full">
            <img className="profile1" src={Pic} alt="Puneet Srivastava" />
          </Box>


          <Box
            w="full"
            maxW="340px"
            p={5}
            borderRadius="xl"
            bg={isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'}
            border="1px solid"
            borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
          >
            <VStack align="stretch" spacing={3} fontSize="13px">
              <Flex justify="space-between">
                <Text color={isDark ? 'gray.400' : 'gray.500'} fontWeight={600}>Role</Text>
                <Text fontWeight={700} color={isDark ? 'white' : 'gray.800'}>Senior QA Analyst / QA Lead</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color={isDark ? 'gray.400' : 'gray.500'} fontWeight={600}>Organization</Text>
                <Text fontWeight={700} color="cyan.400">WPP Production India</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color={isDark ? 'gray.400' : 'gray.500'} fontWeight={600}>Domain</Text>
                <Text fontWeight={700} color={isDark ? 'white' : 'gray.800'}>Pharma & Diagnostics Digital Media</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color={isDark ? 'gray.400' : 'gray.500'} fontWeight={600}>Foundation</Text>
                <Text fontWeight={700} color={isDark ? 'white' : 'gray.800'}>Full-Stack Web Dev (MERN)</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color={isDark ? 'gray.400' : 'gray.500'} fontWeight={600}>Location</Text>
                <Text fontWeight={700} color={isDark ? 'white' : 'gray.800'}>India</Text>
              </Flex>
            </VStack>
          </Box>
        </MotionBox>

        {/* Right Column: Narrative & Core Pillars */}
        <MotionBox
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main Narrative */}
          <Box mb={8}>
            <Text
              fontSize={{ base: '15px', md: '17px' }}
              lineHeight="1.8"
              color={isDark ? 'gray.300' : 'gray.700'}
              textAlign="justify"
            >
              I am a <strong>Senior QA Analyst functioning as QA Lead</strong>, specializing in cross-channel Quality Assurance
              for regulated pharmaceutical and diagnostics digital media campaigns. Over the past 3+ years, I have progressed
              from QA Analyst to Senior QA to leading a team of ~12 QA engineers — reviewing <strong>430+ digital assets a month</strong> across
              7+ channels (EDA, Email, Banner, Print, iPDF, AEM, Landing Pages) while sustaining zero escalations and zero external bugs
              for 12+ consecutive months. I currently lead the pilot onboarding of a new diagnostics account, constructing the QA compliance
              framework from the ground up.
            </Text>

            <Text
              mt={4}
              fontSize={{ base: '15px', md: '17px' }}
              lineHeight="1.8"
              color={isDark ? 'gray.300' : 'gray.700'}
              textAlign="justify"
            >
              Before moving into QA, I trained as a full-stack (MERN) developer through Masai School, engineering end-to-end applications
              with React, Node.js, and MongoDB. That engineering background is why I don't just catch defects — <em>I engineer systems that prevent them</em>:
              I designed and built three proprietary QA automation tools (Video QC, Banner QC, Email QC) and a centralized QA Hub for tracking,
              reporting, and KPI monitoring, cutting manual review time by an estimated <strong>30%+</strong>.
            </Text>
          </Box>

          {/* Two Pillars Grid */}
          <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
            {pillars.map((p, i) => (
              <Box
                key={i}
                p={5}
                borderRadius="xl"
                className="glass-card"
                border="1px solid"
                borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
              >
                <Text fontSize="28px" mb={2}>{p.icon}</Text>
                <Text fontSize="17px" fontWeight={700} color={isDark ? 'white' : 'gray.900'} mb={2}>
                  {p.title}
                </Text>
                <Text fontSize="13px" lineHeight="1.6" color={isDark ? 'gray.400' : 'gray.600'} mb={4}>
                  {p.description}
                </Text>
                <HStack wrap="wrap" spacing={1.5}>
                  {p.tags.map((t, idx) => (
                    <Badge
                      key={idx}
                      fontSize="10px"
                      px={2}
                      py={0.5}
                      borderRadius="md"
                      className="badge-accent"
                    >
                      {t}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            ))}
          </Grid>
        </MotionBox>
      </Grid>
    </Box>
  )
}

export default About
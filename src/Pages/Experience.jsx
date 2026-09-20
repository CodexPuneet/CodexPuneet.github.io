import React from 'react'
import { Box, Flex, Heading, Text, VStack, Badge, Wrap, WrapItem, Grid, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import paymonk from '../Images/paymonk.png'
import Hypo from '../Images/Hypo.png'

const MotionBox = motion(Box);

const QARoleCard = ({ title, account, badge, company, dates, summary, bullets, tools, isDark }) => (
  <MotionBox
    w="100%"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    p={{ base: 6, md: 8 }}
    borderRadius="2xl"
    className="glass-card"
    border="1px solid"
    borderColor={isDark ? 'rgba(243, 14, 79, 0.25)' : 'rgba(243, 14, 79, 0.2)'}
    bg={isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.8)'}
    position="relative"
    overflow="hidden"
  >
    {/* Header row: Account & Dates */}
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align={{ base: 'start', md: 'center' }}
      mb={3}
      gap={2}
    >
      <Flex wrap="wrap" align="center" gap={2}>
        <Badge
          px={3}
          py={1}
          borderRadius="full"
          fontSize="12px"
          fontWeight={700}
          className="badge-accent"
        >
          {account}
        </Badge>
        {badge && (
          <Badge
            px={2.5}
            py={0.5}
            borderRadius="full"
            fontSize="11px"
            fontWeight={600}
            className="badge-cyan"
          >
            {badge}
          </Badge>
        )}
      </Flex>
      <Text fontSize={{ base: '13px', md: '14px' }} color={isDark ? 'gray.400' : 'gray.500'} fontStyle="italic">
        📅 {dates}
      </Text>
    </Flex>

    {/* Title & Company */}
    <Heading fontSize={{ base: '19px', md: '23px' }} fontWeight={700} color={isDark ? 'white' : 'gray.900'} mb={1}>
      {title}
    </Heading>
    <Text fontSize={{ base: '14px', md: '15px' }} color="cyan.400" fontWeight={600} mb={4}>
      {company}
    </Text>

    {/* Summary */}
    <Text fontSize={{ base: '14px', md: '15px' }} lineHeight="1.7" color={isDark ? 'gray.300' : 'gray.700'} mb={4}>
      {summary}
    </Text>

    {/* Bullets */}
    <Box as="ul" className="space-y-2" mb={5}>
      {bullets.map((b, i) => (
        <Flex key={i} align="start" gap={2.5} fontSize={{ base: '13px', md: '14px' }} color={isDark ? 'gray.300' : 'gray.700'} lineHeight="1.6">
          <Text as="span" color="#f30e4f" fontWeight="bold">✦</Text>
          <Text as="span">{b}</Text>
        </Flex>
      ))}
    </Box>

    {/* Tool Tags */}
    {tools && (
      <Wrap spacing={2} pt={2} borderTop="1px solid" borderColor={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}>
        {tools.map((t, i) => (
          <WrapItem key={i}>
            <Badge
              px={2.5}
              py={1}
              borderRadius="md"
              fontSize="11px"
              fontWeight={600}
              bg={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}
              color={isDark ? 'gray.300' : 'gray.700'}
              border="1px solid"
              borderColor={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
            >
              {t}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>
    )}
  </MotionBox>
)

const Experience = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 24 }}>
      {/* Section Header */}
      <VStack spacing={2} textAlign="center" mb={{ base: 12, md: 16 }}>
        <Badge className="badge-accent" px={3} py={1} borderRadius="full" fontSize="12px" fontWeight={700}>
          CAREER TRAJECTORY
        </Badge>
        <Heading fontSize={{ base: '32px', md: '44px' }} fontWeight={800} color="#f30e4f">
          Work Experience
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }} color={isDark ? 'gray.400' : 'gray.600'} maxW="600px">
          Leading regulated pharma digital media QA, audit readiness, and automation tooling across global agency accounts.
        </Text>
      </VStack>

      {/* QA Leadership Roles */}
      <VStack spacing={6} align="stretch">
        <QARoleCard
          account="Roche Diagnostics (Pilot Onboarding)"
          badge="Active Pilot"
          title="Senior QA Analyst (Functioning as QA Lead)"
          company="WPP Production India (formerly Hogarth Studios India / Wunderman Thompson Studios)"
          dates="May 2026 – Present"
          summary="Leading pilot onboarding of the Roche Diagnostics account, engineering the end-to-end QA compliance framework for Continuous Glucose Monitoring (CGM) digital media assets from the ground up."
          bullets={[
            'Architecting a 3-layer QA framework covering global brand standards, channel-specific asset validation, and regulatory delivery sign-off across 7+ digital channels.',
            'Established naming convention taxonomy, EBU R128 audio loudness compliance benchmarks, and funnel-stage CTA validation rules for account launch.',
          ]}
          tools={['Veeva Vault', 'SFMC', 'AEM', 'Regulatory Compliance QA', 'EBU R128']}
          isDark={isDark}
        />

        <QARoleCard
          account="Roche Pharma Account"
          badge="12+ Months Zero Bugs"
          title="Senior QA Analyst (Functioning as QA Lead)"
          company="WPP Production India (formerly Hogarth Studios India / Wunderman Thompson Studios)"
          dates="Jul 2025 – May 2026"
          summary="Entrusted with de facto QA Lead responsibilities to prove leadership readiness; stabilized operations within 3 months, transitioning from pilot to steady-state delivery with zero critical defects."
          bullets={[
            'Led a QA team of ~12 engineers across 7+ channels (EDA, Email, Banner, Print, iPDF, AEM, Landing Pages), reviewing 430+ digital assets/month with zero escalations and zero external bugs over 12+ consecutive months.',
            'Designed and built three proprietary QA automation tools (Video QC, Banner QC, Email QC), slashing manual verification time by 30%+ and expanding team throughput.',
            'Engineered a centralized QA Hub for tracking, task distribution, defect metrics, and KPI monitoring, delivering complete visibility to global account stakeholders.',
          ]}
          tools={['Veeva Vault', 'Viseven', 'eWizard', 'OCE-D', 'OCE-P', 'SFMC', 'AEM', 'QA Hub']}
          isDark={isDark}
        />

        <QARoleCard
          account="Johnson & Johnson (Janssen)"
          badge="Promoted"
          title="Senior QA Analyst"
          company="WPP Production India (formerly Wunderman Thompson Studios)"
          dates="Jul 2024 – Jul 2025"
          summary="Promoted to Senior QA following exceptional performance on GSK; owned quality assurance for Johnson & Johnson's (Janssen) cross-channel digital brand campaigns."
          bullets={[
            'Validated omnichannel digital campaign assets for regulatory compliance, visual precision, and brand guideline conformity across email, web, and display channels.',
            'Collaborated with global creative and technical delivery teams via Veeva Vault, SFMC, and AEM to detect, document, and resolve defects prior to client delivery.',
          ]}
          tools={['Veeva Vault', 'SFMC', 'AEM', 'Omnichannel QA']}
          isDark={isDark}
        />

        <QARoleCard
          account="GSK Account"
          badge="Foundation"
          title="QA Analyst"
          company="Wunderman Thompson Studios"
          dates="Oct 2023 – Jul 2024"
          summary="Launched career in regulated life-sciences digital media QA, executing rigorous quality verification across 7+ channels for GSK global campaigns."
          bullets={[
            'Authored and executed comprehensive test plans, test cases, and test matrices; executed functional, responsive, and cross-browser validation across concurrent campaigns.',
            'Maintained defect documentation and compliance audit reports, assuring client and industry standard alignment ahead of every release.',
          ]}
          tools={['EDA', 'Email QA', 'HTML5 Banners', 'Print', 'AEM']}
          isDark={isDark}
        />
      </VStack>

      {/* Earlier Full-Stack Dev Experience */}
      <Box mt={16}>
        <VStack spacing={2} textAlign="center" mb={10}>
          <Heading fontSize={{ base: '24px', md: '30px' }} fontWeight={700} color="#f30e4f">
            Earlier Software Engineering Experience
          </Heading>
          <Text fontSize={{ base: '13px', md: '15px' }} color={isDark ? 'gray.400' : 'gray.600'} maxW="600px">
            Hands-on full-stack development foundations that now power my technical approach to QA and automation.
          </Text>
        </VStack>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          {/* PayMonk */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            p={6}
            borderRadius="xl"
            className="glass-card"
            border="1px solid"
            borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
          >
            <Flex justify="space-between" align="start" mb={4}>
              <Box bg="white" p={2} borderRadius="lg" w="fit-content">
                <img className="paymonk" src={paymonk} alt="PayMonk" />
              </Box>
              <Text fontSize="12px" color={isDark ? 'gray.400' : 'gray.500'} fontStyle="italic">
                Apr 2023 – Sep 2023
              </Text>
            </Flex>
            <Heading fontSize="18px" fontWeight={700} color={isDark ? 'white' : 'gray.900'} mb={1}>
              Frontend Developer
            </Heading>
            <Text fontSize="14px" color="cyan.400" fontWeight={600} mb={3}>
              Actas Technology Pvt Ltd. (PayMonk)
            </Text>
            <Text fontSize="13px" lineHeight="1.6" color={isDark ? 'gray.300' : 'gray.600'} mb={4}>
              Developed responsive fintech web interfaces, built dynamic multi-tenant white-label themes, and integrated transactional APIs across high-throughput financial dashboards.
            </Text>
            <Wrap spacing={1.5}>
              {['React', 'Redux', 'ChakraUI', 'TypeScript', 'REST APIs'].map((t, i) => (
                <WrapItem key={i}>
                  <Badge fontSize="10px" px={2} py={0.5} borderRadius="md" className="badge-accent">{t}</Badge>
                </WrapItem>
              ))}
            </Wrap>
          </MotionBox>

          {/* Hypothesize */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            p={6}
            borderRadius="xl"
            className="glass-card"
            border="1px solid"
            borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
          >
            <Flex justify="space-between" align="start" mb={4}>
              <Box bg="white" p={2} borderRadius="lg" w="fit-content">
                <img className="paymonk" src={Hypo} alt="Hypothesize" />
              </Box>
              <Text fontSize="12px" color={isDark ? 'gray.400' : 'gray.500'} fontStyle="italic">
                Feb 2023 – Apr 2023
              </Text>
            </Flex>
            <Heading fontSize="18px" fontWeight={700} color={isDark ? 'white' : 'gray.900'} mb={1}>
              Full Stack Developer
            </Heading>
            <Text fontSize="14px" color="cyan.400" fontWeight={600} mb={3}>
              Hypothesize
            </Text>
            <Text fontSize="13px" lineHeight="1.6" color={isDark ? 'gray.300' : 'gray.600'} mb={4}>
              Developed end-to-end responsive web applications from scratch within an aggressive 2-month deadline using TypeScript, Ant Design, and Node.js for client DPS.
            </Text>
            <Wrap spacing={1.5}>
              {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Ant Design'].map((t, i) => (
                <WrapItem key={i}>
                  <Badge fontSize="10px" px={2} py={0.5} borderRadius="md" className="badge-accent">{t}</Badge>
                </WrapItem>
              ))}
            </Wrap>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  )
}

export default Experience

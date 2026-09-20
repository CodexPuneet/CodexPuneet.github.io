import React from 'react'
import { Box, Center, Heading, Text, VStack, Badge, Wrap, WrapItem } from '@chakra-ui/react'
import paymonk from '../Images/paymonk.png'
import Hypo from '../Images/Hypo.png'

const QARole = ({ title, company, dates, summary, bullets, tools }) => (
  <Box
    w={{ base: '92%', md: '90%', lg: '80%' }}
    mx="auto"
    mt={{ base: '35px', md: '50px' }}
    p={{ base: 5, md: 8 }}
    borderRadius="xl"
    border="1px solid rgba(243,14,79,0.35)"
    bg="rgba(255,255,255,0.02)"
  >
    <Center>
      <Text fontSize={{ base: 18, md: 21, lg: 25 }} fontWeight={700}>{title}</Text>
    </Center>
    <Center>
      <Text fontSize={{ base: 15, md: 17, lg: 19 }} color="cyan.400" fontWeight={600}>{company}</Text>
    </Center>
    <Center mb={4}>
      <Text fontSize={{ base: 14, md: 15, lg: 17 }} fontStyle="italic" opacity={0.8}>{dates}</Text>
    </Center>
    <Text fontSize={{ base: 15, md: 16, lg: 18 }} textAlign="justify" mb={3}>{summary}</Text>
    <Text as="ul" className="list-disc list-inside space-y-2" fontSize={{ base: 14, md: 15, lg: 17 }}>
      {bullets.map((b, i) => (
        <li key={i} className="leading-6">{b}</li>
      ))}
    </Text>
    {tools && (
      <Wrap mt={4}>
        {tools.map((t, i) => (
          <WrapItem key={i}>
            <Badge colorScheme="pink" variant="subtle" px={2} py={1} borderRadius="md">{t}</Badge>
          </WrapItem>
        ))}
      </Wrap>
    )}
  </Box>
)

const Experience = () => {
  return (
    <Box pt={{ base: 10, md: 120 }}>
      <Heading fontSize={{ base: 40, md: 50 }} textAlign={'center'} style={{ color: 'rgb(243, 14, 79)' }}>Work Experience</Heading>

      <VStack spacing={0} mt={10}>
        <QARole
          title="Senior QA Analyst (Functioning as QA Lead) — Roche Diagnostics Onboarding (Pilot)"
          company="WPP Production India (formerly Hogarth Studios India, formerly Wunderman Thompson Studios)"
          dates="May 2026 – Present"
          summary="Leading pilot onboarding of the Roche Diagnostics account, building the end-to-end QA compliance framework for CGM (Continuous Glucose Monitoring) digital media assets from the ground up."
          bullets={[
            'Designing a 3-layer QA framework — global standards, channel-specific validation, and delivery/compliance sign-off — covering 7+ digital channels.',
            'Established naming convention standards, audio compliance benchmarks (EBU R128), and funnel-stage CTA validation logic for the new account onboarding.',
          ]}
          tools={['Veeva Vault', 'SFMC', 'AEM', 'Compliance QA']}
        />

        <QARole
          title="Senior QA Analyst (Functioning as QA Lead) — Roche Pharma Account"
          company="WPP Production India (formerly Hogarth Studios India, formerly Wunderman Thompson Studios)"
          dates="Jul 2025 – May 2026"
          summary="Onboarded the Roche pharma account and was entrusted with de facto QA Lead responsibilities to prove readiness for the role; stabilized operations within approximately 3 months, transitioning from pilot to steady-state with zero critical defects."
          bullets={[
            'Led a QA team of ~12 resources across 7+ channels (EDA, Email, Banner, Print, iPDF, AEM, Landing Pages), reviewing 430+ digital assets/month, sustaining zero escalations and zero external bugs over 12+ consecutive months.',
            'Designed and built three QA automation tools — a Video QC tool, a Banner QC tool, and an Email QC tool — reducing manual review time by an estimated 30%+ and increasing team bandwidth.',
            'Built a centralized QA Hub for tracking, reporting, task assignment, and KPI monitoring across the team, improving delivery visibility and predictability for stakeholders.',
          ]}
          tools={['Veeva Vault', 'Viseven', 'eWizard', 'OCE-D', 'OCE-P', 'SFMC', 'AEM']}
        />

        <QARole
          title="Senior QA Analyst — Johnson & Johnson (Janssen) Account"
          company="WPP Production India (formerly Wunderman Thompson Studios)"
          dates="Jul 2024 – Jul 2025"
          summary="Promoted to Senior QA after strong performance on the GSK account; owned quality assurance for Johnson & Johnson's (Janssen) cross-channel digital campaigns."
          bullets={[
            "Validated omnichannel campaign assets for accuracy, regulatory compliance, and brand consistency across email, banner, and web channels.",
            'Partnered with global creative and development teams using Veeva Vault, SFMC, and AEM to identify, document, and resolve defects pre-delivery.',
          ]}
          tools={['Veeva Vault', 'SFMC', 'AEM']}
        />

        <QARole
          title="QA Analyst — GSK Account"
          company="Wunderman Thompson Studios"
          dates="Oct 2023 – Jul 2024"
          summary="Started career in regulated pharma digital media QA, performing quality assurance across 7+ channels for GSK."
          bullets={[
            'Designed and executed test plans, test cases, and test scenarios; performed manual, unit, and system testing across multiple concurrent projects.',
            'Documented QA processes and defect reports, ensuring compliance with client and industry standards ahead of every delivery.',
          ]}
          tools={['EDA', 'Email', 'Banner', 'Print', 'AEM']}
        />
      </VStack>

      <Center mt={16} mb={6}>
        <Text fontSize={{ base: 26, md: 32 }} fontWeight={700} style={{ color: 'rgb(243, 14, 79)' }}>Earlier Development Experience</Text>
      </Center>

      <Center>
        <figure>
          <Box><img className='paymonk' src={paymonk} alt="Pic" /></Box>
        </figure>
      </Center>
      <Box w={{ base: '92%', md: '90%', lg: '80%' }} mt={{ base: '30px', md: '40px' }} ml={{ base: '15px', md: '42px', lg: '150px' }} lineHeight={{ base: '7', md: '9' }}>
        <Center>
          <Text fontSize={{ base: 16, md: 17, lg: 22 }} fontWeight={700}>Actas Technology Pvt Ltd. (PayMonk) — Frontend Developer</Text>
        </Center>
        <Center>
          <Text fontSize={{ base: 14, md: 15, lg: 19 }} fontStyle="italic" opacity={0.8}>Apr 2023 – Sep 2023</Text>
        </Center>
        <Text mt={4} fontSize={{ base: 15, md: 16, lg: 19 }} textAlign={'justify'}>
          Built and maintained responsive fintech web interfaces, created dynamic themes for white labels, and integrated APIs across dashboards using React, Redux, and ChakraUI.
        </Text>
      </Box>

      <Center mt={12}>
        <figure>
          <Box><img className='paymonk' src={Hypo} alt="Pic" /></Box>
        </figure>
      </Center>
      <Box w={{ base: '92%', md: '90%', lg: '80%' }} mt={{ base: '30px', md: '40px' }} mb={20} ml={{ base: '15px', md: '42px', lg: '150px' }} lineHeight={{ base: '7', md: '9' }}>
        <Center>
          <Text fontSize={{ base: 16, md: 17, lg: 22 }} fontWeight={700}>Hypothesize — Full Stack Developer</Text>
        </Center>
        <Center>
          <Text fontSize={{ base: 14, md: 15, lg: 19 }} fontStyle="italic" opacity={0.8}>Feb 2023 – Apr 2023</Text>
        </Center>
        <Text mt={4} fontSize={{ base: 15, md: 16, lg: 19 }} textAlign={'justify'}>
          Developed and maintained responsive web apps end-to-end using React.js, Redux, TypeScript, and Ant Design, delivering a client website from scratch within a 2-month deadline.
        </Text>
      </Box>
    </Box>
  )
}

export default Experience

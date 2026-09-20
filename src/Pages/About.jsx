import { Box,  Center,  Heading, Text, } from '@chakra-ui/react'
import React from 'react'
import Pic from '../Images/image2.jpg';

function About() {
  return (
    <Box pt={{base: 10, md:120}}   id='about' >
      <Heading fontSize={{base:40, md:50}} textAlign={'center'} style={{color:'rgb(243, 14, 79)'}}>About Me</Heading>
      <Center mt={{base:'50px',md:100}} >
   
    <figure>
      <Box ><img  className='profile1' src={Pic} alt="Pic" /></Box>
    </figure>
    
      </Center>
      <Box w={{base:'92%',md:'90%', lg:'80%'}} mt={{base:'40px',md:'50px'}}  ml={{base:'15px', md:'42px',lg:'150px'}} lineHeight={{base:'7',md:'10'}} >
      <Text fontSize={{base:15,md:17,lg:21}} textAlign={'justify'}  >
       
      I'm a Senior QA Analyst functioning as QA Lead, specializing in cross-channel Quality Assurance for regulated pharmaceutical and diagnostics digital media campaigns. Over the past 3+ years I've progressed from QA Analyst to Senior QA to leading a team of ~12 QA resources — reviewing 430+ digital assets a month across 7+ channels (EDA, Email, Banner, Print, iPDF, AEM, Landing Pages) while sustaining zero escalations and zero external bugs for 12+ consecutive months. I currently lead the pilot onboarding of a new diagnostics account, building the QA compliance framework from the ground up.
      <br/><br/>
      Before moving into QA, I trained as a full-stack (MERN) developer through Masai School, building end-to-end products with React, Node.js, and MongoDB. That engineering background is why I don't just catch defects — I build systems that prevent them: I've designed and built three proprietary QA automation tools (Video QC, Banner QC, Email QC) and a centralized QA Hub for tracking, reporting, and KPI monitoring, cutting manual review time by an estimated 30%+. I'm currently exploring how AI can further strengthen QA workflows without compromising the rigor regulated environments demand.
       </Text>
      </Box>
    </Box> 
  )
}

export default About
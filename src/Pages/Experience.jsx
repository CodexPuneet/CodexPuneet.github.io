import React from 'react'
import { Box, Center, Flex, Heading, Text, } from '@chakra-ui/react'
import paymonk from '../Images/paymonk.png'
import Hypo from '../Images/Hypo.png'


const Experience = () => {
  return (
    <Box pt={{ base: 10, md: 120 }} id='about' >
      <Heading fontSize={{ base: 40, md: 50 }} textAlign={'center'} style={{ color: 'rgb(243, 14, 79)' }}>Work Experience</Heading>
      <Center mt={{ base: '50px', md: 100 }} >

        <figure>
          <Box ><img className='paymonk' src={paymonk} alt="Pic" /></Box>
        </figure>

      </Center>
      <Box w={{ base: '92%', md: '90%', lg: '80%' }} mt={{ base: '40px', md: '50px' }} ml={{ base: '15px', md: '42px', lg: '150px' }} lineHeight={{ base: '7', md: '10' }} >

        <Text fontSize={{ base: 17, md: 19, lg: 25 }} textAlign={'justify'}  >
        <Center >
        <h1><b>Actas Technology Pvt Ltd. (Paymonk)</b></h1> 
        </Center> 
        <Center>
        <Text fontSize={{ base: 16, md: 17, lg: 23 }}><b>Frontend Developer</b></Text>
        </Center>
       <Center>
       <Text fontSize={{ base: 15, md: 16, lg: 22 }}><b>May 2023 - August 2023</b></Text>
       </Center>
        </Text>
        <Text mt={{ base: '20px' }} fontSize={{ base: 15, md: 17, lg: 21 }} textAlign={'justify'}  >
          During my tenure as a Front-End Developer at PayMonk, I had the privilege of contributing to the company's mission of delivering cutting-edge integrated Digital Financial Transaction Platforms. Leveraging my skills in front-end development, I played a key role in enhancing the user experience and overall functionality of PayMonk's platforms.
        </Text>
        <Text  mt={{ base: '20px' }} fontSize={{ base: 16, md: 17, lg: 23 }}><b>Responsibilities and Achievements:</b></Text>
        <Text mt={{ base: '20px' }} fontSize={{ lg: 19 }} textAlign={'justify'} as="ul" className="list-disc list-inside space-y-4">
      <li className="leading-6">
        Collaborated with cross-functional teams, including designers and back-end developers, to translate design concepts and user requirements into efficient and visually appealing front-end interfaces.
      </li>
      <li className="leading-6">
        Developed responsive and user-friendly web applications ensuring seamless functionality across various devices and browsers.
      </li>
      <li className="leading-6">
        Implemented modern front-end frameworks (e.g., Angular or AngularJs) to streamline development processes and improve code maintainability.
      </li>
      <li className="leading-6">
        Actively participated in code reviews, providing constructive feedback to peers and incorporating feedback received to enhance the overall code quality.
      </li>
      <li className="leading-6">
        Contributed to the optimization of web applications for performance, resulting in improved loading times and a smoother user experience.
      </li>
      <li className="leading-6">
        Collaborated in the integration of third-party APIs to expand the platform's capabilities and provide users with a wider range of financial services.
      </li>
      <li className="leading-6">
        Demonstrated flexibility and adaptability by quickly learning and implementing new technologies and industry best practices as required by evolving project needs.
      </li>
    </Text>
    <Text  mt={{ base: '20px' }} fontSize={{ base: 16, md: 17, lg: 23 }}><b>Technologies Used:</b></Text>
    <Text mt={{ base: '20px' }} fontSize={{ lg: 19 }} textAlign={'justify'} as="ul" className="list-disc list-inside space-y-4">
      <li className="leading-6">
      HTML, CSS, JavaScript
      </li>
      <li className="leading-6">
      TypeScript
      </li>
      <li className="leading-6">
      BootStrap
      </li>
      <li className="leading-6">
      Angular & AngularJS
      </li>
      </Text>
      <Text  mt={{ base: '20px' }} fontSize={{ base: 16, md: 17, lg: 23 }}><b>Lessons Learned:</b></Text>
      <Text mt={{ base: '20px' }} fontSize={{ base: 15, md: 17, lg: 21 }} textAlign={'justify'}  >
      My experience at PayMonk reinforced the importance of effective collaboration in delivering successful projects. I learned how to balance creative design with functional requirements and gained a deeper understanding of the unique challenges and opportunities within the FINTECH domain.
          </Text>


      </Box>
      <Center mt={{ base: '50px', md: 100 }} >

<figure>
  <Box ><img className='paymonk' src={Hypo} alt="Pic" /></Box>
</figure>

</Center>
      <Box w={{ base: '92%', md: '90%', lg: '80%' }} mt={{ base: '40px', md: '50px' }} ml={{ base: '15px', md: '42px', lg: '150px' }} lineHeight={{ base: '7', md: '10' }} >
      <Text fontSize={{ base: 17, md: 19, lg: 25 }} textAlign={'justify'}  >
        <Center >
        <h1><b>Hypothesize</b></h1> 
        </Center> 
        <Center>
        <Text fontSize={{ base: 16, md: 17, lg: 23 }}><b>Frontend Developer</b></Text>
        </Center>
       <Center>
       <Text fontSize={{ base: 15, md: 16, lg: 22 }}><b>April 2023 - June 2023</b></Text>
       </Center>
        </Text>
        <Text mt={{ base: '20px' }} fontSize={{ base: 15, md: 17, lg: 21 }} textAlign={'justify'}  >
        During my tenure as a Front-End Developer, I was involved in a significant project for our client DPS, creating a comprehensive website from the ground up. Leveraging technologies such as TypeScript and Ant Design, I played a crucial role in transforming concepts into a fully functional and visually appealing web presence.
        For this contract, I was tasked with building a website for our client within 2 months of deadline. The project involved creating an engaging and user-friendly interface. I utilized a range of technologies, including TypeScript, Ant Design, Sass, and more, to craft a seamless and aesthetically pleasing web experience.
        </Text>
        <Text  mt={{ base: '20px' }} fontSize={{ base: 16, md: 17, lg: 23 }}><b>Responsibilities and Achievements:</b></Text>
        <Text mt={{ base: '20px' }} fontSize={{ lg: 19 }} textAlign={'justify'} as="ul" className="list-disc list-inside space-y-4">
      <li className="leading-6">
      Collaborated closely with the design team and project stakeholders to understand the client's requirements and translate them into actionable front-end solutions.
      </li>
      <li className="leading-6">
      Developed the website using TypeScript, harnessing its strong typing system to enhance code quality, maintainability, and overall development efficiency.
        </li>
      <li className="leading-6">
      Implemented responsive design principles, ensuring the website's usability and performance across various devices and screen sizes.
      </li>
      <li className="leading-6">
      Employed version control (e.g., Git) to manage code changes and collaborate effectively with the project team. This ensured smooth collaboration, version tracking, and the ability to work seamlessly in a team environment.
       </li>
      <li className="leading-6">
      Integrated and interacted with APIs to fetch and display dynamic content on the website, enhancing user engagement and interactivity.
         </li>
      <li className="leading-6">
      Actively participated in code reviews, providing and receiving feedback to maintain code quality and promote best practices.
        </li>
      <li className="leading-6">
      Successfully delivered a fully functional website within the project timeline, meeting the client's expectations and requirements. </li>
    </Text>
    <Text  mt={{ base: '20px' }} fontSize={{ base: 16, md: 17, lg: 23 }}><b>Technologies Used:</b></Text>
    <Text mt={{ base: '20px' }} fontSize={{ lg: 19 }} textAlign={'justify'} as="ul" className="list-disc list-inside space-y-4">
      <li className="leading-6">
      React
      </li>
      <li className="leading-6">
      React Toolkit
      </li>
      <li className="leading-6">
      TypeScript
      </li>
      <li className="leading-6">
      Ant Design
      </li>
      <li className="leading-6">
      Sass
      </li>
      <li className="leading-6">
     NodeJs
      </li>
      <li className="leading-6">
      Express
      </li>
      <li className="leading-6">
      MongoDB
      </li>
      </Text>
      <Text  mt={{ base: '20px' }} fontSize={{ base: 16, md: 17, lg: 23 }}><b>Lessons Learned:</b></Text>
      <Text mt={{ base: '20px' }} fontSize={{ base: 15, md: 17, lg: 21 }} textAlign={'justify'}  >
      My experience at Hypothesize was a valuable opportunity for growth, as I learned to integrate design concepts using Figma, expanded my skill set to include Sass, and successfully utilized TypeScript for efficient and effective front-end development. This experience highlighted the importance of adaptability and continuous learning in a dynamic development environment.
          </Text>
      </Box>
    </Box>
  )
}

export default Experience
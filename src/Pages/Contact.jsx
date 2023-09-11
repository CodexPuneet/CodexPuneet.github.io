import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { IconButton } from '@chakra-ui/button';
import {  FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { Link as IconLink } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box pt={{base:'10px',md:'80px'}} >
      <div  className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8" >
        <p style={{color:'rgb(243, 14, 79)'}} className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Contact
        </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/6d4817dd-23e1-45eb-a469-cbba0f66ad12"
            method="POST"
            className=" flex flex-col w-90% md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Enter your Phone"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
      <div>
      </div>
    <Box display={{base:"block", lg:"none"}} mb="50px">
      <Center>
      <IconLink href='https://github.com/CodexPuneet' target='_blank' className=' hover:scale-110 duration-200'> <IconButton icon={<FaGithub />} isRound={true}></IconButton></IconLink>
      <IconLink href='https://www.linkedin.com/in/puneet-srivastava7/' target='_blank' className=' hover:scale-110 duration-200'><IconButton icon={<FaLinkedin />} isRound={true}></IconButton></IconLink>
      <IconLink href='tel:+91-7007500804' target='_blank' className=' hover:scale-110 duration-200'><IconButton icon={<FaPhoneAlt />} isRound={true}></IconButton></IconLink>  
      </Center>
    </Box>
     
   </Box>
  );
};

export default Contact;
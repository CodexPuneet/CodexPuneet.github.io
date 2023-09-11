import React from 'react'
import html from "../Images/html.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import reactImage from "../Images/react.png";
import chakraUI from "../Images/chakra.png";
import redux from "../Images/redux.png";
import github from "../Images/github.png";
import tailwind from "../Images/tailwind.png";
import TS from "../Images/TS.png";
import cy from "../Images/cy.png";
import node from "../Images/node.png";
import mongo from "../Images/mongo.png";
import express from "../Images/express.png";
import api from "../Images/api.jpeg";
import ant from "../Images/ant.png"
import sass from "../Images/scss.webp"
import npm from "../Images/npm.png";
import angular from "../Images/angular.webp";
import { Box } from '@chakra-ui/react';
import Github from '../Components/Github';


const Skills = () => {
  let mode = localStorage.getItem('chakra-ui-color-mode')
  // console.log(mode)

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: chakraUI,
      title: "ChakraUI",
      style: "shadow-cyan-400",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-violet-400",
    },
    {
      id: 8,
      src: TS,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: cy,
      title: "Cypress Testing",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: node,
      title: "NodeJS",
      style: "shadow-green-300",
    },
    {
      id: 12,
      src: express,
      title: "ExpressJS",
      style: "shadow-gray-600",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: api,
      title: "API",
      style: "shadow-green-600",
    },
    {
      id: 15,
      src: npm,
      title: "npm",
      style: "shadow-orange-400",
    },
    {
      id: 16,
      src: angular,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 17,
      src: ant,
      title: "Ant Design",
      style: "shadow-blue-600",
    },
    {
      id: 18,
      src: sass,
      title: "Sass",
      style: "shadow-pink-600",
    },
  ];
  return (
    <Box pt={{base: 7, md:110}}  m='80px 0 0 20px' id='skills' >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p style={{color:'rgb(243, 14, 79)'}} className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Skills & Tools
        </p>
        
      </div>
      <br></br>
      <p mt='50px'>These are the technologies I've worked with</p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4" style={mode==="dark"?{color:"white"}:{color:"#f30e4f"}} >{title}</p>
          </div>
        ))}
      </div>
    </div>
    <Github />
  </Box>
  )
}

export default Skills
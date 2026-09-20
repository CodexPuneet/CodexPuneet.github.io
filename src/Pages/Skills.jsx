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
import veevaIcon from "../Images/veeva.svg";
import sfmcIcon from "../Images/salesforce.svg";
import aemIcon from "../Images/aem.svg";
import jiraIcon from "../Images/jira.svg";
import visevenIcon from "../Images/viseven.svg";
import ewizardIcon from "../Images/ewizard.svg";
import oceIcon from "../Images/oce.svg";
import compIcon from "../Images/compliance.svg";
import omniIcon from "../Images/omnichannel.svg";
import { Box, Flex, Heading, Text, VStack, Badge, useColorMode } from '@chakra-ui/react';
import Github from '../Components/Github';

const Skills = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const qaTools = [
    { id: 1, src: veevaIcon, title: "Veeva Vault", style: "shadow-orange-500" },
    { id: 2, src: sfmcIcon, title: "SFMC", style: "shadow-blue-500" },
    { id: 3, src: aemIcon, title: "Adobe Experience Manager", style: "shadow-red-500" },
    { id: 4, src: visevenIcon, title: "Viseven", style: "shadow-purple-500" },
    { id: 5, src: ewizardIcon, title: "eWizard", style: "shadow-cyan-400" },
    { id: 6, src: oceIcon, title: "OCE-D / OCE-P", style: "shadow-sky-500" },
    { id: 7, src: compIcon, title: "Regulatory Compliance QA", style: "shadow-green-500" },
    { id: 8, src: omniIcon, title: "Cross-Channel QA", style: "shadow-pink-500" },
    { id: 9, src: jiraIcon, title: "Jira", style: "shadow-blue-600" },
    { id: 10, src: cy, title: "Cypress Testing", style: "shadow-gray-400" },
  ];

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
    <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 24 }} id="skills">
      {/* Section Header */}
      <VStack spacing={2} textAlign="center" mb={{ base: 12, md: 16 }}>
        <Badge className="badge-accent" px={3} py={1} borderRadius="full" fontSize="12px" fontWeight={700}>
          TECHNICAL ARSENAL
        </Badge>
        <Heading fontSize={{ base: '32px', md: '44px' }} fontWeight={800} color="#f30e4f">
          Skills & Tooling
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }} color={isDark ? 'gray.400' : 'gray.600'} maxW="650px">
          The platforms, compliance tools, and full-stack software technologies I leverage daily.
        </Text>
      </VStack>

      {/* Primary Category: QA & Life Sciences Platforms */}
      <Box mb={16}>
        <Flex align="center" gap={3} mb={6}>
          <Badge className="badge-accent" px={3} py={1} borderRadius="md" fontSize="13px" fontWeight={700}>
            PRIMARY FOCUS
          </Badge>
          <Text fontSize={{ base: '18px', md: '22px' }} fontWeight={700} color={isDark ? 'white' : 'gray.900'}>
            Regulated QA, Life Sciences & Campaign Platforms
          </Text>
        </Flex>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center py-4">
          {qaTools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-300 py-5 px-3 rounded-2xl border transition-all ${style}`}
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
              }}
            >
              <img src={src} alt={title} className="w-16 h-16 object-contain mx-auto" />
              <p
                className="mt-4 font-semibold text-xs md:text-sm"
                style={{ color: isDark ? '#f1f5f9' : '#0f172a' }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </Box>

      {/* Secondary Category: Full-Stack Engineering */}
      <Box mb={16}>
        <Flex align="center" gap={3} mb={6}>
          <Badge className="badge-cyan" px={3} py={1} borderRadius="md" fontSize="13px" fontWeight={700}>
            ENGINEERING FOUNDATION
          </Badge>
          <Text fontSize={{ base: '18px', md: '22px' }} fontWeight={700} color={isDark ? 'white' : 'gray.900'}>
            Full-Stack Development & Testing Stack
          </Text>
        </Flex>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center py-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-4 px-2 rounded-2xl border transition-all ${style}`}
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
              }}
            >
              <img src={src} alt={title} className="w-14 h-14 object-contain mx-auto" />
              <p
                className="mt-3 font-semibold text-xs"
                style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </Box>

      {/* GitHub Calendar Section */}
      <Github />
    </Box>
  )
}

export default Skills
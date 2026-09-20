import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Input, Textarea, Button, useColorMode, Link as IconLink, Badge } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "srivastavap714@gmail.com",
      href: "mailto:srivastavap714@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91-7007500804",
      href: "tel:+91-7007500804",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "puneet-srivastava7",
      href: "https://www.linkedin.com/in/puneet-srivastava7/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "CodexPuneet",
      href: "https://github.com/CodexPuneet",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "India (Open to Remote / Relocation)",
      href: null,
    },
  ];

  return (
    <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 24 }} id="contact">
      {/* Section Header */}
      <VStack spacing={2} textAlign="center" mb={{ base: 12, md: 16 }}>
        <Badge className="badge-accent" px={3} py={1} borderRadius="full" fontSize="12px" fontWeight={700}>
          GET IN TOUCH
        </Badge>
        <Heading fontSize={{ base: '32px', md: '44px' }} fontWeight={800} color="#f30e4f">
          Contact Me
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }} color={isDark ? 'gray.400' : 'gray.600'} maxW="600px">
          Interested in discussing QA leadership, pharma compliance frameworks, or automation initiatives? Let's connect.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: '1fr', lg: '1fr 1.2fr' }} gap={{ base: 8, lg: 12 }} alignItems="start">
        {/* Left Side: Contact Info Cards */}
        <VStack spacing={4} align="stretch">
          <Box
            p={6}
            borderRadius="2xl"
            className="glass-card"
            border="1px solid"
            borderColor={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}
          >
            <Heading fontSize="20px" fontWeight={700} color={isDark ? 'white' : 'gray.900'} mb={4}>
              Direct Channels
            </Heading>
            <VStack spacing={4} align="stretch">
              {contactDetails.map((c, i) => (
                <Flex
                  key={i}
                  as={c.href ? IconLink : Box}
                  href={c.href}
                  target={c.href && c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href && c.href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ textDecoration: 'none' }}
                  align="center"
                  gap={4}
                  p={3}
                  borderRadius="xl"
                  bg={isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}
                  border="1px solid"
                  borderColor={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}
                  transition="all 0.2s"
                  _hover={c.href ? { borderColor: '#f30e4f', transform: 'translateX(4px)' } : {}}
                >
                  <Box color="#f30e4f" fontSize="18px">
                    {c.icon}
                  </Box>
                  <Box>
                    <Text fontSize="11px" fontWeight={600} color={isDark ? 'gray.400' : 'gray.500'} textTransform="uppercase">
                      {c.label}
                    </Text>
                    <Text fontSize="14px" fontWeight={600} color={isDark ? 'gray.200' : 'gray.800'}>
                      {c.value}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>
        </VStack>

        {/* Right Side: Contact Form */}
        <Box
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          className="glass-card"
          border="1px solid"
          borderColor={isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
        >
          <Heading fontSize="20px" fontWeight={700} color={isDark ? 'white' : 'gray.900'} mb={2}>
            Send a Message
          </Heading>
          <Text fontSize="13px" color={isDark ? 'gray.400' : 'gray.600'} mb={6}>
            Fill in your details and I'll respond within 24 hours.
          </Text>

          <form
            action="https://getform.io/f/6d4817dd-23e1-45eb-a469-cbba0f66ad12"
            method="POST"
          >
            <VStack spacing={4}>
              <Box w="100%">
                <Text fontSize="12px" fontWeight={600} color={isDark ? 'gray.300' : 'gray.700'} mb={1}>
                  Your Name
                </Text>
                <Input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Jane Doe"
                  size="md"
                  borderRadius="lg"
                  bg={isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)'}
                  borderColor={isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}
                  color={isDark ? 'white' : 'gray.900'}
                  _focus={{ borderColor: '#f30e4f', boxShadow: '0 0 0 1px #f30e4f' }}
                />
              </Box>

              <Box w="100%">
                <Text fontSize="12px" fontWeight={600} color={isDark ? 'gray.300' : 'gray.700'} mb={1}>
                  Email Address
                </Text>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  size="md"
                  borderRadius="lg"
                  bg={isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)'}
                  borderColor={isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}
                  color={isDark ? 'white' : 'gray.900'}
                  _focus={{ borderColor: '#f30e4f', boxShadow: '0 0 0 1px #f30e4f' }}
                />
              </Box>

              <Box w="100%">
                <Text fontSize="12px" fontWeight={600} color={isDark ? 'gray.300' : 'gray.700'} mb={1}>
                  Phone / Mobile (Optional)
                </Text>
                <Input
                  type="text"
                  name="mobile"
                  placeholder="+1 (555) 000-0000"
                  size="md"
                  borderRadius="lg"
                  bg={isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)'}
                  borderColor={isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}
                  color={isDark ? 'white' : 'gray.900'}
                  _focus={{ borderColor: '#f30e4f', boxShadow: '0 0 0 1px #f30e4f' }}
                />
              </Box>

              <Box w="100%">
                <Text fontSize="12px" fontWeight={600} color={isDark ? 'gray.300' : 'gray.700'} mb={1}>
                  Message
                </Text>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell me about your team, campaign, or QA objectives..."
                  rows={5}
                  size="md"
                  borderRadius="lg"
                  bg={isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)'}
                  borderColor={isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}
                  color={isDark ? 'white' : 'gray.900'}
                  _focus={{ borderColor: '#f30e4f', boxShadow: '0 0 0 1px #f30e4f' }}
                />
              </Box>

              <Button
                type="submit"
                w="100%"
                size="lg"
                borderRadius="xl"
                className="downloadbtn"
                fontSize="15px"
                mt={2}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
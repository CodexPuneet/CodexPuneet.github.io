import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useColorMode, Box, IconButton } from "@chakra-ui/react";

const Social = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const links = [
    {
      id: 1,
      title: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/puneet-srivastava7/",
      style: "rounded-tr-xl",
    },
    {
      id: 2,
      title: "GitHub",
      icon: <FaGithub size={22} />,
      href: "https://github.com/CodexPuneet",
    },
    {
      id: 3,
      title: "Email",
      icon: <HiOutlineMail size={22} />,
      href: "mailto:srivastavap714@gmail.com",
    },
    {
      id: 4,
      title: "Resume",
      icon: <BsFillPersonLinesFill size={22} />,
      href: "./Puneet_Srivastava_Resume.docx",
      style: "rounded-br-xl",
      download: "Puneet_Srivastava_Resume.docx",
    },
  ];

  return (
    <Box
      position="fixed"
      top={{ base: "42%", md: "40%" }}
      left={0}
      transform="translateY(-50%)"
      zIndex={999}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      {/* Mobile Toggle Handle (visible on small screens < md) */}
      <Box display={{ base: "block", md: "none" }} mb={1}>
        <IconButton
          aria-label="Toggle Social Drawer"
          icon={mobileOpen ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
          size="xs"
          onClick={() => setMobileOpen(!mobileOpen)}
          borderTopRightRadius="md"
          borderBottomRightRadius="md"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          bg={isDark ? "rgba(15, 23, 42, 0.9)" : "rgba(255, 255, 255, 0.95)"}
          color={isDark ? "cyan.400" : "cyan.700"}
          border="1px solid"
          borderLeft="none"
          borderColor={isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"}
          boxShadow="0 4px 12px rgba(0,0,0,0.15)"
          _hover={{ bg: isDark ? "rgba(30, 41, 59, 0.9)" : "white" }}
        />
      </Box>

      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {links.map(({ id, title, icon, href, style, download }) => {
          const isExpanded = mobileOpen || hoveredId === id;
          return (
            <li
              key={id}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={style || ""}
              style={{
                width: "148px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                transform: isExpanded ? "translateX(0)" : "translateX(-100px)",
                transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, border-color 0.2s ease",
                background: isDark
                  ? hoveredId === id
                    ? "rgba(30, 41, 59, 0.95)"
                    : "rgba(15, 23, 42, 0.88)"
                  : hoveredId === id
                    ? "rgba(248, 250, 252, 0.98)"
                    : "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderTop: "1px solid",
                borderRight: "1px solid",
                borderBottom: "1px solid",
                borderLeft: "none",
                borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
                boxShadow: isDark
                  ? "0 8px 24px -4px rgba(0, 0, 0, 0.5)"
                  : "0 8px 20px -4px rgba(0, 0, 0, 0.12)",
                borderTopRightRadius: id === 1 ? "12px" : "0",
                borderBottomRightRadius: id === 4 ? "12px" : "0",
                cursor: "pointer",
                padding: "0 14px",
              }}
            >
              <a
                href={href}
                download={download}
                target={download ? undefined : "_blank"}
                rel="noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: hoveredId === id
                    ? "#f30e4f"
                    : isDark
                      ? "#f1f5f9"
                      : "#1e293b",
                  transition: "color 0.2s ease",
                }}
              >
                <span>{title}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: hoveredId === id
                      ? "#f30e4f"
                      : isDark
                        ? "#38bdf8"
                        : "#0284c7",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    transform: hoveredId === id ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {icon}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Social;
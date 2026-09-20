import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={22} />
        </>
      ),
      href: "https://www.linkedin.com/in/puneet-srivastava7/",
      style: "rounded-tr-xl",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={22} />
        </>
      ),
      href: "https://github.com/CodexPuneet",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={22} />
        </>
      ),
      href: "mailto:srivastavap714@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={22} />
        </>
      ),
      href: "./Puneet_Srivastava_Resume.pdf",
      style: "rounded-br-xl",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-36 h-12 px-4 ml-[-95px] hover:ml-[-5px] duration-300 border-y border-r border-white/10 shadow-lg " +
              (style || "")
            }
            style={{
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray-200 hover:text-cyan-400 font-semibold text-xs transition-colors"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
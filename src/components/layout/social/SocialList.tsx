import styled from "@emotion/styled";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";
import SocialItem from "./SocialItem";

const list = [
  {
    id: Math.random().toString(36).slice(2, 11),
    href: "https://github.com/isdebrave",
    icon: IoLogoGithub,
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    href: "#",
    icon: IoLogoLinkedin,
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    href: "#",
    icon: IoIosMail,
  },
];

const Ul = styled.ul`
  display: flex;
`;

const SocialList = () => {
  return (
    <Ul>
      {list.map((item) => (
        <SocialItem key={item.id} href={item.href} icon={item.icon} />
      ))}
    </Ul>
  );
};

export default SocialList;

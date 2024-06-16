import styled from "@emotion/styled";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";
import SocialItem from "./SocialItem";

const list = [
  {
    href: "https://github.com/isdebrave",
    icon: IoLogoGithub,
  },
  {
    href: "#",
    icon: IoLogoLinkedin,
  },
  {
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
        <SocialItem key={item.href} href={item.href} icon={item.icon} />
      ))}
    </Ul>
  );
};

export default SocialList;

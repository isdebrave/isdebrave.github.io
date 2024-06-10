import styled from "@emotion/styled";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";

const list = [
  {
    href: "#",
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
  & > a {
    font-size: 30px;
    margin: 0 10px;
  }
`;

const SocialList = () => {
  return (
    <Ul>
      <a href="#">
        <IoLogoGithub />
      </a>
      <a href="#">
        <IoLogoLinkedin />
      </a>
      <a href="#">
        <IoIosMail />
      </a>
    </Ul>
  );
};

export default SocialList;

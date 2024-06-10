import React from "react";
import {
  IoIosArchive,
  IoIosPricetags,
  IoMdHome,
  IoMdPerson,
} from "react-icons/io";
import NavItem from "./NavItem";
import styled from "@emotion/styled";

const list = [
  {
    href: "/",
    icon: IoMdHome,
    label: "All",
  },
  {
    href: "/category",
    icon: IoIosPricetags,
    label: "Category",
  },
  {
    href: "/project",
    icon: IoIosArchive,
    label: "Project",
  },
  {
    href: "/about",
    icon: IoMdPerson,
    label: "About",
  },
];

const Ul = styled.ul`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
`;

const NavList = () => {
  return (
    <Ul>
      {list.map((item) => (
        <NavItem href={item.href} icon={item.icon} label={item.label} />
      ))}
    </Ul>
  );
};

export default NavList;

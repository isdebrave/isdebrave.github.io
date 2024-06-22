import React from "react";
import {
  IoIosArchive,
  IoIosPricetags,
  IoMdHome,
  IoMdPerson,
} from "react-icons/io";
import styled from "@emotion/styled";
import NavItem from "./NavItem";

const list = [
  {
    id: Math.random().toString(36).slice(2, 11),
    to: "/",
    icon: IoMdHome,
    label: "Home",
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    to: "/category?tag=All",
    icon: IoIosPricetags,
    label: "Category",
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    to: "/project",
    icon: IoIosArchive,
    label: "Project",
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    to: "/about",
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
        <NavItem
          key={item.id}
          to={item.to}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </Ul>
  );
};

export default NavList;

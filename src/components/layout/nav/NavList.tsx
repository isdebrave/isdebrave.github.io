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
    to: "/",
    icon: IoMdHome,
    label: "All",
  },
  {
    to: "/category",
    icon: IoIosPricetags,
    label: "Category",
  },
  {
    to: "/project",
    icon: IoIosArchive,
    label: "Project",
  },
  {
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
          key={item.to}
          to={item.to}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </Ul>
  );
};

export default NavList;

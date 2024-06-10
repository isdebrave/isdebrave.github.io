import React from "react";
import { IconType } from "react-icons";
import styled from "@emotion/styled";

type NavItemType = {
  href: string;
  icon: IconType;
  label: string;
};

const Li = styled.li`
  width: 100%;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease-in-out;

  & > a {
    display: inline-flex;
    padding: 6px;
    border-radius: 5px;
    margin: 5px 0;
  }

  & > a > span {
    margin-left: 10px;
  }

  & > a:hover {
    color: white;
  }
`;

const NavItem: React.FC<NavItemType> = (props) => {
  const { href, icon: Icon, label } = props;

  return (
    <Li>
      <a href={href}>
        <Icon />
        <span>{label}</span>
      </a>
    </Li>
  );
};

export default NavItem;

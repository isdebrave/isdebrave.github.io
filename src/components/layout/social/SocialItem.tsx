import styled from "@emotion/styled";
import React from "react";
import { IconType } from "react-icons";

type SocialItemType = {
  href: string;
  icon: IconType;
};

const Li = styled.li`
  width: 100%;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease-in-out;

  & > a {
    display: inline-flex;
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
  }

  & > a:hover {
    color: white;
  }
`;

const SocialItem: React.FC<SocialItemType> = (props) => {
  const { href, icon: Icon } = props;

  return (
    <Li>
      <a href={href} target="__blank">
        <Icon />
      </a>
    </Li>
  );
};

export default SocialItem;

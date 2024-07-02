import React, { useRef } from "react";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "../layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { IoMenu } from "react-icons/io5";

type TemplateType = {
  children: React.ReactNode;
};

const TopNavigation = styled.header`
  z-index: 10;
  position: fixed;
  background-color: #f3f1ea;
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  & > button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 100px;
    }
  }

  & > h2 {
    width: 100%;
    text-align: center;
  }
`;

const Wrapper = styled.main`
  position: relative;
  padding: 110px 70px 70px 70px;
  flex: 1;
  transition: all 0.3s ease-in-out;
  /* min-height: 100vh; */
`;

const onClick = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.style.marginLeft = "0px";
  }
};

const Template: React.FC<TemplateType> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <TopNavigation>
        <button onClick={() => onClick(ref)}>
          <IoMenu size={30} />
        </button>
      </TopNavigation>
      <Layout ref={ref} />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Template;

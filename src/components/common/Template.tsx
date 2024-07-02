import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "../layout/Layout";
import Search from "components/Search";

type TemplateType = {
  children: React.ReactNode;
};

export type menuHandlerType = {
  ref: React.RefObject<HTMLDivElement>;
  open: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

const TemplateWrapper = styled.main`
  position: relative;
  padding: 110px 70px 70px 70px;
  flex: 1;
  transition: all 0.3s ease-in-out;
`;

const menuHandler = (props: menuHandlerType) => {
  const { ref, open, setIsMenuOpen } = props;

  return () => {
    if (ref.current) {
      if (open) {
        ref.current.style.marginLeft = "0px";
        setIsMenuOpen(true);
      } else {
        ref.current.style.marginLeft = "-250px";
        setIsMenuOpen(false);
      }
    }
  };
};

const Template: React.FC<TemplateType> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyle />
      <TopNavigation>
        <button onClick={menuHandler({ ref, open: true, setIsMenuOpen })}>
          <IoMenu size={30} />
        </button>
        <Search />
      </TopNavigation>
      <Layout
        ref={ref}
        onClose={menuHandler({ ref, open: false, setIsMenuOpen })}
        isMenuOpen={isMenuOpen}
      />
      <TemplateWrapper>{props.children}</TemplateWrapper>
    </>
  );
};

export default Template;

import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "../layout/Layout";
import { Link } from "gatsby";
import Search from "components/search/Search";
import { Helmet } from "react-helmet";

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MenuButton = styled.button`
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
`;

const TemplateWrapper = styled.main`
  position: relative;
  padding: 110px 100px 70px 100px;
  flex: 1;
  transition: all 0.3s ease-in-out;
  min-height: inherit;

  @media (max-width: 600px) {
    padding: 110px 30px 70px 30px;
  }
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
      <Helmet>
        <html lang="ko" />

        <title>Isdebrave's Blog</title>

        <meta
          name="description"
          content="새로 얻은 개발 지식을 저장하는 창고입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        {/* 대부분의 SNS에서 사용할 수 있는 데이터 */}
        <meta property="og:title" content="Isdebrave's Blog" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="<http://www.my-website.com/>" />
        {/* <meta property="og:image" content="<http://my-website.com/image.jpg>" /> */}

        <meta property="og:description" content="WebSite Description" />
        <meta property="og:site_name" content="Site Name, i.e. Moz" />

        <meta
          name="google-site-verification"
          content="dXHX7-TiTJQO_hnWngVrUbvTe-amzRkcrcfGB0yplio"
        />
      </Helmet>
      <TopNavigation>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MenuButton onClick={menuHandler({ ref, open: true, setIsMenuOpen })}>
            <IoMenu size={30} />
          </MenuButton>
          <Link to="/">
            <h3>Isdebrave</h3>
          </Link>
        </div>
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

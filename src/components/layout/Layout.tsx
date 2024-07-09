import styled from "@emotion/styled";
import Footer from "components/Footer";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import NavList from "./nav/NavList";
import Profile from "./profile/Profile";
import SocialList from "./social/SocialList";
import Overlay from "components/Overlay";

type LayoutType = {
  onClose: () => void;
  isMenuOpen: boolean;
};

const LayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-left: -250px;
  width: 250px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 20;

  & > button {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    color: white;
    margin: 10px;
    padding: 5px;
    display: flex;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 100px;
    }
  }

  & > nav {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px 50px 30px;
    color: white;
  }
`;

const Background = styled(GatsbyImage)`
  position: absolute !important;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const Layout = forwardRef<HTMLDivElement, LayoutType>((props, ref) => {
  const { onClose, isMenuOpen } = props;

  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "layout-background" }) {
        childImageSharp {
          gatsbyImageData(width: 203, height: 361, placeholder: DOMINANT_COLOR)
        }
      }
    }
  `);
  const { gatsbyImageData } = data.file.childImageSharp;

  return (
    <LayoutWrapper ref={ref}>
      {isMenuOpen && <Overlay onClick={onClose} color="rgba(0, 0, 0, 0.4)" />}

      <button onClick={onClose}>
        <IoClose size={30} />
      </button>
      <Background image={gatsbyImageData} alt="background" />
      <nav>
        <Profile />
        <NavList />
        <SocialList />
        <Footer />
      </nav>
    </LayoutWrapper>
  );
});

export default Layout;

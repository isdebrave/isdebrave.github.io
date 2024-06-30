import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import NavList from "./nav/NavList";
import SocialList from "./social/SocialList";
import Profile from "./profile/Profile";
import Footer from "components/Footer";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const LayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 20;

  & > nav {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    color: white;
  }

  @media (max-width: 1200px) {
    margin-left: -250px;
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

const Layout = forwardRef((_, ref: React.ForwardedRef<HTMLDivElement>) => {
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

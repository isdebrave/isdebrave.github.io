import React, { useRef } from "react";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "../layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";

type TemplateType = {
  children: React.ReactNode;
};

const ProfileContainer = styled.div`
  position: fixed;
  padding: 10px;
  width: 100%;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
  }
`;

const ProfileImage = styled(GatsbyImage)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const clickHandler = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.style.marginLeft = "0px";
  }
};

const Template: React.FC<TemplateType> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children } = props;

  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "profile" }) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 80, placeholder: DOMINANT_COLOR)
        }
      }
    }
  `);
  const { gatsbyImageData } = data.file.childImageSharp;

  return (
    <>
      <GlobalStyle />
      <div
        style={{ position: "relative", display: "flex", minHeight: "100vh" }}
      >
        <ProfileContainer>
          <div
            style={{ display: "inline-block" }}
            onClick={() => clickHandler(ref)}
          >
            <ProfileImage image={gatsbyImageData} alt="profileImage" />
          </div>
        </ProfileContainer>
        <Layout ref={ref} />
        {children}
      </div>
    </>
  );
};

export default Template;

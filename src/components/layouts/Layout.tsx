import styled from "@emotion/styled";
import React from "react";
import NavList from "./nav/NavList";
import SocialList from "./social/SocialList";
import Profile from "./profile/Profile";

const LayoutWrapper = styled.aside`
  position: relative;
  width: 250px;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    color: white;
  }
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Background
        src="https://png.pngtree.com/thumb_back/fh260/background/20230329/pngtree-summer-sea-vertical-cartoon-background-image_2120521.jpg"
        alt="background"
      />
      <div style={{ height: "100%" }}>
        <Profile />
        <NavList />
        <SocialList />
      </div>
    </LayoutWrapper>
  );
};

export default Layout;

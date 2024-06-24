import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; All Rights Reserved, Powered By Gatsby.
    </FooterContainer>
  );
};

export default Footer;

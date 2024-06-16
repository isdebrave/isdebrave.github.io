import styled from "@emotion/styled";
import React from "react";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      &copy; All Rights Reserved, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;

import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "../layout/Layout";

type TemplateType = {
  children: React.ReactNode;
};

const Template: React.FC<TemplateType> = (props) => {
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex" }}>
        <Layout />
        {children}
      </div>
    </>
  );
};

export default Template;

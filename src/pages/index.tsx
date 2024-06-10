import Layout from "components/layouts/Layout";
import { graphql } from "gatsby";
import React from "react";
import GlobalStyle from "styles/GlobalStyle";

type IndexPageType = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const IndexPage: React.FC<IndexPageType> = (props) => {
  const { title } = props.data.site.siteMetadata;

  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", height: "100%" }}>
        <Layout />
        {/* <Content/> */}
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default IndexPage;

export const queryData = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import styled from "@emotion/styled";
import Layout from "components/layout/Layout";
import PostList from "components/post/PostList";
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

const ContentWrapper = styled.main`
  position: relative;
  margin-left: 250px;
  padding: 70px 20px;
  flex: 1;
  background-color: #eeebe0;

  & > h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const IndexPage: React.FC<IndexPageType> = (props) => {
  const { title } = props.data.site.siteMetadata;

  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Layout />
        <ContentWrapper>
          <h1>{title}</h1>
          <PostList />
        </ContentWrapper>
      </div>
    </>
  );
};

export default IndexPage;

export const getPostList = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

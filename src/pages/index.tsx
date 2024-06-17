import styled from "@emotion/styled";
import Template from "components/common/Template";
import PostList from "components/post/PostList";
import { graphql } from "gatsby";
import React from "react";
import { ContentWrapper } from "styles/ContentWrapper";

type IndexPageType = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const HomeWrapper = styled(ContentWrapper)`
  & > h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const IndexPage: React.FC<IndexPageType> = (props) => {
  const { title } = props.data.site.siteMetadata;

  return (
    <Template>
      <HomeWrapper>
        <h1>{title}</h1>
        <PostList />
      </HomeWrapper>
    </Template>
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

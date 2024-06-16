import styled from "@emotion/styled";
import Layout from "components/layout/Layout";
import { PostItemType } from "components/post/PostItem";
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
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: PostItemType;
        };
      }[];
    };
  };
};

const ContentWrapper = styled.main`
  position: relative;
  margin-left: 250px;
  padding: 70px 20px;
  flex: 1;
  background-color: #eeebe0;
`;

const IndexPage: React.FC<IndexPageType> = (props) => {
  const { title } = props.data.site.siteMetadata;
  const { edges } = props.data.allMarkdownRemark;

  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Layout />
        <ContentWrapper>
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>{title}</h1>
          <PostList posts={edges} />
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`;

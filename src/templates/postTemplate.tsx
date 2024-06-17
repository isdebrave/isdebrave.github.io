import styled from "@emotion/styled";
import Template from "components/common/Template";
import { graphql } from "gatsby";
import React from "react";
import { ContentWrapper } from "styles/ContentWrapper";

type PostTemplateType = {};

const PostTemplate: React.FC<PostTemplateType> = (props) => {
  console.log(props);

  return (
    <Template>
      <ContentWrapper>Post Template</ContentWrapper>
    </Template>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

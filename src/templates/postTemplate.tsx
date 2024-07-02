import React from "react";
import { graphql } from "gatsby";
import Template from "components/common/Template";
import PostContent from "components/post/PostContent";
import PostImage from "components/post/PostImage";
import PostInfo from "components/post/PostInfo";
import { Wrapper } from "styles/index";
import { FrontmatterType } from "types";
import styled from "@emotion/styled";
import Comment from "components/Comment";
import Toc from "components/Toc";

type PostTemplateType = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          html: string;
          frontmatter: FrontmatterType;
        };
      }[];
    };
  };
};

const PostTemplateWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
`;

const PostTemplate: React.FC<PostTemplateType> = (props) => {
  const { frontmatter, html } = props.data.allMarkdownRemark.edges[0].node;
  const { gatsbyImageData } = frontmatter.thumbnail.childImageSharp;

  return (
    <Template>
      <PostTemplateWrapper>
        <div>
          <PostInfo
            title={frontmatter.title}
            date={frontmatter.date}
            categories={frontmatter.categories}
          />
          <PostImage image={gatsbyImageData} />
          <PostContent id="post-content" html={html} />
          <Comment />
        </div>
        {/* <div>
          <Toc />
        </div> */}
      </PostTemplateWrapper>
    </Template>
  );
};

export default PostTemplate;

export const getPostData = graphql`
  query postQueryData($slug: String) {
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
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`;

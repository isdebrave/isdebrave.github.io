import React from "react";
import { graphql } from "gatsby";
import { CardItemType } from "components/card/CardItem";
import Template from "components/common/Template";
import PostContent from "components/post/PostContent";
import PostImage from "components/post/PostImage";
import PostInfo from "components/post/PostInfo";
import Comment from "components/comment/Comment";
import { Wrapper } from "styles/index";

type PostTemplateType = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          html: string;
          frontmatter: CardItemType;
        };
      }[];
    };
  };
};

const PostTemplate: React.FC<PostTemplateType> = (props) => {
  const { frontmatter, html } = props.data.allMarkdownRemark.edges[0].node;
  const { gatsbyImageData } = frontmatter.thumbnail.childImageSharp;

  return (
    <Template>
      <Wrapper>
        <PostInfo
          title={frontmatter.title}
          date={frontmatter.date}
          categories={frontmatter.categories}
        />
        <PostImage image={gatsbyImageData} />
        <PostContent html={html} />
        <Comment />
      </Wrapper>
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

import styled from "@emotion/styled";
import React from "react";
import PostItem, { PostItemType } from "./PostItem";
import { graphql, useStaticQuery } from "gatsby";

const Grid = styled.div`
  display: grid;
  width: 768px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 auto;
`;

const PostList = () => {
  const data = useStaticQuery(graphql`
    {
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
  `);

  const posts = data.allMarkdownRemark.edges as Array<{
    node: {
      id: string;
      frontmatter: PostItemType;
    };
  }>;

  return (
    <Grid>
      {posts.map((post) => (
        <PostItem key={post.node.id} {...post.node.frontmatter} />
      ))}
    </Grid>
  );
};

export default PostList;

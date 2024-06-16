import styled from "@emotion/styled";
import React from "react";
import PostItem, { PostItemType } from "./PostItem";

type PostListType = {
  posts: {
    node: {
      id: string;
      frontmatter: PostItemType;
    };
  }[];
};

const Grid = styled.div`
  display: grid;
  width: 768px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 auto;
`;

const PostList: React.FC<PostListType> = (props) => {
  const { posts } = props;

  return (
    <Grid>
      {posts.map((post) => (
        <PostItem key={post.node.id} {...post.node.frontmatter} />
      ))}
    </Grid>
  );
};

export default PostList;

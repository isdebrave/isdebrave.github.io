import styled from "@emotion/styled";
import React from "react";
import "github-markdown-css/github-markdown.css";

type PostContentType = {
  html: string;
};

const MarkdownBody = styled.div`
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  background-color: #eeebe0;
  color: black;
  /* 스크랩 색 */
  color-scheme: light;
`;

const PostContent: React.FC<PostContentType> = (props) => {
  const { html } = props;

  return (
    <MarkdownBody className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </MarkdownBody>
  );
};

export default PostContent;

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

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 768px) {
    .markdown-body {
      padding: 15px;
    }
  }
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

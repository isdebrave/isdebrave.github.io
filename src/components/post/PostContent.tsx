import styled from "@emotion/styled";
import React from "react";
import "github-markdown-css/github-markdown.css";

type PostContentType = {
  id: string;
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
    max-width: 768px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 768px) {
    .markdown-body {
      padding: 15px;
    }
  }
`;

const ScrollOnTop = styled.div`
  h1,
  h2,
  h3 {
    scroll-margin-top: 80px;
  }
`;

const PostContent: React.FC<PostContentType> = (props) => {
  const { id, html } = props;

  return (
    <MarkdownBody id={id} className="markdown-body">
      <ScrollOnTop dangerouslySetInnerHTML={{ __html: html }} />
    </MarkdownBody>
  );
};

export default PostContent;

import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";

type TagListType = {
  list: string[];
  linkTag?: boolean;
};

const Ul = styled.ul<{ linkTag?: boolean }>`
  margin: 10px 0;
  display: flex;
  justify-content: ${({ linkTag }) => (linkTag ? "center" : null)};
  gap: 10px;
`;

const Li = styled.li<{ linkTag?: boolean }>`
  background-color: black;
  color: white;
  padding: ${({ linkTag }) => (linkTag ? null : "2px 5px")};
  border-radius: 5px;

  & > a {
    display: block;
    padding: 2px 5px;
  }
`;

const TagList: React.FC<TagListType> = (props) => {
  const { list, linkTag = false } = props;

  return (
    <Ul linkTag={linkTag}>
      {list.map((tag) => (
        <Li key={tag} linkTag={linkTag}>
          {linkTag ? <Link to={`/category?tag=${tag}`}>{tag}</Link> : tag}
        </Li>
      ))}
    </Ul>
  );
};

export default TagList;

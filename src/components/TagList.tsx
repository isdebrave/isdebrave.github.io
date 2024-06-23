import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";

type TagListType = {
  list: string[];
  link?: boolean;
};

const Ul = styled.ul<{ center?: boolean }>`
  margin: 10px 0;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : null)};
  gap: 10px;
`;

const Li = styled.li`
  background-color: black;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
`;

const TagList: React.FC<TagListType> = (props) => {
  const { list, link = false } = props;

  if (link) {
    return (
      <Ul center>
        {list.map((tag) => (
          <Li key={tag}>
            <Link to={`/category?tag=${tag}`}>{tag}</Link>
          </Li>
        ))}
      </Ul>
    );
  }

  return (
    <Ul>
      {list.map((item) => (
        <Li key={item}>{item}</Li>
      ))}
    </Ul>
  );
};

export default TagList;

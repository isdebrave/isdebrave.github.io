import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";

type PostInfoType = {
  title: string;
  date: string;
  categories: string[];
};

const CategoryList = styled.ul`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const CategoryItem = styled.li`
  background-color: black;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
`;

const PostInfo: React.FC<PostInfoType> = (props) => {
  const { title, date, categories } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <span>{date}</span>
      <CategoryList>
        {categories.map((tag) => (
          <CategoryItem key={tag}>
            <Link to={`/category?tag=${tag}`}>{tag}</Link>
          </CategoryItem>
        ))}
      </CategoryList>
    </div>
  );
};

export default PostInfo;

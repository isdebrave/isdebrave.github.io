import TagList from "components/TagList";
import React from "react";

type PostInfoType = {
  title: string;
  date: string;
  categories: string[];
};

const PostInfo: React.FC<PostInfoType> = (props) => {
  const { title, date, categories } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <span>{date}</span>
      <TagList list={categories} linkTag />
    </div>
  );
};

export default PostInfo;

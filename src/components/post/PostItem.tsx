import styled from "@emotion/styled";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export type PostItemType = {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  link: string;
};

const PostItemWrapper = styled(Link)`
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  height: 100%;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Date = styled.h4`
  font-weight: 400;
  opacity: 0.5;
`;

const CategoryList = styled.ul`
  margin: 10px 0;
  display: flex;
  gap: 10px;
`;

const CategoryItem = styled.li`
  background-color: black;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
`;

const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PostItem: React.FC<PostItemType> = (props) => {
  const {
    title,
    categories,
    date,
    summary,
    thumbnail: {
      childImageSharp: { gatsbyImageData },
    },
    link,
  } = props;

  return (
    <PostItemWrapper to={link}>
      <ImageWrapper>
        <GatsbyImage image={gatsbyImageData} alt="cardBackground" />
      </ImageWrapper>
      <div style={{ padding: "15px", backgroundColor: "white" }}>
        <h2>{title}</h2>
        <Date style={{ fontWeight: "400", opacity: "0.5" }}>{date}</Date>
        <CategoryList>
          {categories.map((category) => (
            <CategoryItem>{category}</CategoryItem>
          ))}
        </CategoryList>
        <Summary>{summary}</Summary>
      </div>
    </PostItemWrapper>
  );
};

export default PostItem;

import styled from "@emotion/styled";
import TagList from "components/TagList";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { FrontmatterType } from "types";

type CardItemType = FrontmatterType & { link: string };

const CardItemContainer = styled(Link)`
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

const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardItem: React.FC<CardItemType> = (props) => {
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
    <CardItemContainer to={link}>
      <ImageWrapper>
        <GatsbyImage image={gatsbyImageData} alt="cardBackground" />
      </ImageWrapper>
      <div style={{ padding: "15px", backgroundColor: "white" }}>
        <h2>{title}</h2>
        <Date>{date}</Date>
        <TagList list={categories} />
        <Summary>{summary}</Summary>
      </div>
    </CardItemContainer>
  );
};

export default CardItem;

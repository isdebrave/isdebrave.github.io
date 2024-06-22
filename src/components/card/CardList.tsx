import styled from "@emotion/styled";
import React from "react";
import CardItem, { CardItemType } from "./CardItem";

type CardListType = {
  selectedTag?: string;
  edges: {
    node: {
      id: string;
      fields: {
        slug: string;
      };
      frontmatter: CardItemType;
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

const CardList: React.FC<CardListType> = (props) => {
  const { selectedTag, edges } = props;

  let newList: Array<{
    node: {
      id: string;
      fields: { slug: string };
      frontmatter: CardItemType;
    };
  }> = [];
  // const edges = data.allMarkdownRemark.edges as Array<{
  //   node: {
  //     id: string;
  //     fields: { slug: string };
  //     frontmatter: CardItemType;
  //   };
  // }>;

  if (selectedTag && selectedTag != "All") {
    newList = edges.filter((edge) => {
      return edge.node.frontmatter.categories.includes(selectedTag);
    });
  } else {
    newList = edges;
  }

  return (
    <Grid>
      {newList.map((item) => (
        <CardItem
          key={item.node.id}
          {...item.node.frontmatter}
          link={item.node.fields.slug}
        />
      ))}
    </Grid>
  );
};

export default CardList;

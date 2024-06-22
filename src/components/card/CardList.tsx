import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { EdgesType } from "types";
import CardItem from "./CardItem";

type CardListType = {
  selectedTag: string;
  edges: EdgesType[];
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

  const [list, setList] = useState(edges);

  useEffect(() => {
    if (selectedTag != "All") {
      const selectedList = edges.filter((edge) => {
        return edge.node.frontmatter.categories.includes(selectedTag);
      });

      setList(selectedList);
    }
  }, [selectedTag]);

  return (
    <Grid>
      {list.map((item) => (
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

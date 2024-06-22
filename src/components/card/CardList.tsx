import styled from "@emotion/styled";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CardItem, { CardItemType } from "./CardItem";

type CardListType = {
  selectedTag?: string;
};

const Grid = styled.div`
  display: grid;
  width: 768px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 auto;
`;

const CardList: React.FC<CardListType> = (props) => {
  const { selectedTag } = props;

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              summary
              date(formatString: "YYYY.MM.DD")
              categories
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 768, height: 400)
                }
              }
            }
          }
        }
      }
    }
  `);

  let list: Array<{
    node: {
      id: string;
      fields: { slug: string };
      frontmatter: CardItemType;
    };
  }> = [];
  const edges = data.allMarkdownRemark.edges as Array<{
    node: {
      id: string;
      fields: { slug: string };
      frontmatter: CardItemType;
    };
  }>;

  if (selectedTag && selectedTag != "All") {
    list = edges.filter((edge) => {
      return edge.node.frontmatter.categories.includes(selectedTag);
    });
  } else {
    list = edges;
  }

  return (
    <Grid>
      {list.map((edge) => (
        <CardItem
          key={edge.node.id}
          {...edge.node.frontmatter}
          link={edge.node.fields.slug}
        />
      ))}
    </Grid>
  );
};

export default CardList;

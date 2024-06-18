import styled from "@emotion/styled";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CardItem, { CardItemType } from "./CardItem";

const Grid = styled.div`
  display: grid;
  width: 768px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 auto;
`;

const CardList = () => {
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

  const cardList = data.allMarkdownRemark.edges as Array<{
    node: {
      id: string;
      fields: { slug: string };
      frontmatter: CardItemType;
    };
  }>;

  return (
    <Grid>
      {cardList.map((card) => (
        <CardItem
          key={card.node.id}
          {...card.node.frontmatter}
          link={card.node.fields.slug}
        />
      ))}
    </Grid>
  );
};

export default CardList;

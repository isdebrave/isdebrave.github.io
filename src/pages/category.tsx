import styled from "@emotion/styled";
import { CardItemType } from "components/card/CardItem";
import CardList from "components/card/CardList";
import Template from "components/common/Template";
import { Link, graphql, useStaticQuery } from "gatsby";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "styles/ContentWrapper";

type TagListType = {
  selectedTag: string;
  tagList: {
    [key: string]: number;
  };
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

const CategoryPage = () => {
  const [tagList, setTagList] = useState<TagListType["tagList"]>({});
  const [selectedTag, setSelectedTag] = useState("");

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

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const tag =
      typeof parsed.tag !== "string" || !parsed.tag ? "All" : parsed.tag;

    setSelectedTag(tag);
  }, [window.location.search]);

  useEffect(() => {
    const list: TagListType["tagList"] = { All: 0 };

    const edges = data.allMarkdownRemark.edges as Array<{
      node: {
        id: string;
        fields: { slug: string };
        frontmatter: CardItemType;
      };
    }>;

    for (const edge of edges) {
      const categories = edge.node.frontmatter.categories;

      categories.forEach((category) => {
        if (!list[category]) {
          list[category] = 1;
        } else {
          list[category]++;
        }
      });

      list["All"]++;
    }

    setTagList(list);
  }, []);

  return (
    <Template>
      <ContentWrapper>
        <CategoryList>
          {Object.entries(tagList).map(([tag, count]) => (
            <CategoryItem key={tag}>
              <Link to={`/category?tag=${tag}`}>{tag}</Link>
            </CategoryItem>
          ))}
        </CategoryList>
        <CardList selectedTag={selectedTag} />
      </ContentWrapper>
    </Template>
  );
};

export default CategoryPage;

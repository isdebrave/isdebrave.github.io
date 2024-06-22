import styled from "@emotion/styled";
import CardList from "components/card/CardList";
import Template from "components/common/Template";
import { Link, graphql } from "gatsby";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Wrapper } from "styles/index";
import { AllMarkdownRemarkType } from "types";

type TagListType = {
  selectedTag: string;
  tagList: {
    [key: string]: number;
  };
};

type CategoryPageType = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: AllMarkdownRemarkType;
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

const CategoryPage: React.FC<CategoryPageType> = (props) => {
  const { search } = props.location;
  const { edges } = props.data.allMarkdownRemark;

  const [tagList, setTagList] = useState<TagListType["tagList"]>({});
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    const parsed = queryString.parse(search);

    if (typeof parsed.tag === "string") {
      setSelectedTag(parsed.tag);
    }
  }, [search]);

  useEffect(() => {
    const list: TagListType["tagList"] = { All: 0 };

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
      <Wrapper>
        <CategoryList>
          {Object.entries(tagList).map(([tag, count]) => (
            <CategoryItem key={tag}>
              <Link to={`/category?tag=${tag}`}>{tag}</Link>
            </CategoryItem>
          ))}
        </CategoryList>
        <CardList edges={edges} selectedTag={selectedTag} />
      </Wrapper>
    </Template>
  );
};

export default CategoryPage;

export const getCategoryListData = graphql`
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
`;

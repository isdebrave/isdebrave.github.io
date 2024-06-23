import styled from "@emotion/styled";
import TagList from "components/TagList";
import CardList from "components/card/CardList";
import Template from "components/common/Template";
import { graphql } from "gatsby";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Wrapper } from "styles/index";
import { AllMarkdownRemarkType } from "types";

type TagListType = {
  [key: string]: number;
};

type CategoryPageType = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: AllMarkdownRemarkType;
  };
};

const CategoryWrapper = styled(Wrapper)`
  & > h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const CategoryPage: React.FC<CategoryPageType> = (props) => {
  const { search } = props.location;
  const { edges } = props.data.allMarkdownRemark;

  const [tagList, setTagList] = useState<TagListType>({});
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    const parsed = queryString.parse(search);

    if (typeof parsed.tag === "string") {
      setSelectedTag(parsed.tag);
    }
  }, [search]);

  useEffect(() => {
    const list: TagListType = { All: 0 };

    for (const edge of edges) {
      const categories = edge.node.frontmatter.categories;

      categories.forEach((tag) => {
        if (!list[tag]) {
          list[tag] = 1;
        } else {
          list[tag]++;
        }
      });

      list["All"]++;
    }

    setTagList(list);
  }, []);

  return (
    <Template>
      <CategoryWrapper>
        <h1>
          Tags &gt; {selectedTag} &gt; {tagList[selectedTag]} Posts
        </h1>
        <TagList list={Object.keys(tagList)} linkTag />
        <CardList edges={edges} selectedTag={selectedTag} />
      </CategoryWrapper>
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

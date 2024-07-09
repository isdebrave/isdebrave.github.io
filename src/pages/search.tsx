import styled from "@emotion/styled";
import CardList from "components/card/CardList";
import Template from "components/common/Template";
import Fuse from "fuse.js";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import { AllMarkdownRemarkType, EdgesType } from "types";

type SearchPageType = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: AllMarkdownRemarkType;
  };
};

const EmptyText = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const SearchPage: React.FC<SearchPageType> = (props) => {
  const { search } = props.location;
  const { data } = props;

  const [keyword, setKeyword] = useState("");
  const [searchList, setSearchList] = useState<EdgesType[]>([]);

  useEffect(() => {
    const keyword = sessionStorage.getItem("keyword");
    const list = sessionStorage.getItem("searchList");

    if (keyword && list) {
      const parsedHeader = JSON.parse(keyword);
      const parsedList = JSON.parse(list);

      setKeyword(parsedHeader);
      setSearchList(parsedList);
    }
  }, []);

  useEffect(() => {
    const value = search.split("keyword=")[1];

    const modifiedList = data.allMarkdownRemark.edges.map((edge) => {
      return {
        id: edge.node.id,
        fields: edge.node.fields,
        ...edge.node.frontmatter,
      };
    });

    const fuse = new Fuse(modifiedList, {
      keys: ["categories", "title", "summary"],
      includeScore: true,
    });

    const result = fuse.search(value);

    const edges = result.map((element) => {
      const { id, fields, ...frontmatter } = element.item;

      return {
        node: {
          id: id,
          fields: fields,
          frontmatter: frontmatter,
        },
      };
    });

    sessionStorage.setItem("keyword", JSON.stringify(value));
    sessionStorage.setItem("searchList", JSON.stringify(edges));

    setKeyword(value);
    setSearchList(edges);
  }, [search]);

  return (
    <Template>
      {searchList.length > 0 ? (
        <>
          <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
            "{keyword}" 검색 결과
          </h1>
          <CardList edges={searchList} selectedTag="All" />
        </>
      ) : (
        <EmptyText>검색 결과가 없습니다.</EmptyText>
      )}
    </Template>
  );
};

export default SearchPage;

export const getSearchListData = graphql`
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

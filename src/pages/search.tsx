import styled from "@emotion/styled";
import CardList from "components/card/CardList";
import Template from "components/common/Template";
import Fuse from "fuse.js";
import { graphql } from "gatsby";
import React, { FormEvent, useEffect, useState } from "react";
import { Wrapper } from "styles/index";
import { AllMarkdownRemarkType, EdgesType } from "types";

type SearchPageType = {
  data: {
    allMarkdownRemark: AllMarkdownRemarkType;
  };
};

const Form = styled.form`
  width: 768px;
  margin: 0 auto;

  & > input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 30px;
    padding: 10px 15px;
    background-color: transparent;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transition: border-bottom 0.3s ease-in-out;

    &:focus {
      border-bottom: 2px solid #ffbe76;
    }
  }
`;

const EmptyText = styled.h1`
  width: 768px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
  color: rgba(0, 0, 0, 0.5);
`;

const SearchPage: React.FC<SearchPageType> = (props) => {
  const { data } = props;

  const [header, setHeader] = useState("");
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState<EdgesType[]>([]);

  useEffect(() => {
    const header = localStorage.getItem("header");
    const list = localStorage.getItem("searchList");

    if (header && list) {
      const parsedHeader = JSON.parse(header);
      const parsedList = JSON.parse(list);

      setHeader(parsedHeader);
      setSearchList(parsedList);
    }
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    localStorage.setItem("header", JSON.stringify(value));
    localStorage.setItem("searchList", JSON.stringify(edges));

    setSearchList(edges);
    setHeader(value);
    setValue("");
  };

  return (
    <Template>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
        </Form>
        {searchList.length > 0 ? (
          <>
            <h1 style={{ margin: "50px 0 20px 0", textAlign: "center" }}>
              "{header}" 검색 결과
            </h1>
            <CardList edges={searchList} selectedTag="All" />
          </>
        ) : (
          <EmptyText>검색 결과가 없습니다.</EmptyText>
        )}
      </Wrapper>
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

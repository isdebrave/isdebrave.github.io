import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import React, { FormEvent, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { AllMarkdownRemarkType, EdgesType } from "types";
import Template from "components/common/Template";
import { Wrapper } from "styles/index";
import CardList from "components/card/CardList";
import { v4 as uuidv4 } from "uuid";

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

const SearchPage: React.FC<SearchPageType> = (props) => {
  const { data } = props;

  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState<EdgesType[]>([]);

  const modifiedList = data.allMarkdownRemark.edges.map(
    (edge) => edge.node.frontmatter
  );

  const fuse = new Fuse(modifiedList, {
    keys: ["categories", "title", "summary"],
    includeScore: true,
  });

  useEffect(() => {
    const result = fuse.search(query);

    const edges = result.map((_, idx) => {
      const edge = data.allMarkdownRemark.edges[idx];

      return {
        node: {
          id: edge.node.id,
          fields: edge.node.fields,
          frontmatter: edge.node.frontmatter,
        },
      };
    });

    setSearchList(edges);
  }, [query]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setQuery(value);
    setValue("");
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Template>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
            value={value}
          />
        </Form>
        <CardList edges={searchList} selectedTag="All" />
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

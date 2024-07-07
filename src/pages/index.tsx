import CardList from "components/card/CardList";
import Template from "components/common/Template";
import { graphql } from "gatsby";
import React, { useEffect } from "react";
import { AllMarkdownRemarkType, SiteType } from "types";

type IndexPageType = {
  data: {
    site: SiteType;
    allMarkdownRemark: AllMarkdownRemarkType;
  };
};

const IndexPage: React.FC<IndexPageType> = (props) => {
  const { edges } = props.data.allMarkdownRemark;

  useEffect(() => {
    sessionStorage.removeItem("header");
    sessionStorage.removeItem("searchList");
  }, []);

  return (
    <Template>
      <CardList edges={edges} selectedTag="All" />
    </Template>
  );
};

export default IndexPage;

export const getHomeListData = graphql`
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

import { graphql } from "gatsby";
import React from "react";

type IndexPageType = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const IndexPage: React.FC<IndexPageType> = (props) => {
  const { title } = props.data.site.siteMetadata;

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default IndexPage;

export const queryData = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

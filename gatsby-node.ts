import { type GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

// Alias 설정하기
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        utils: path.resolve(__dirname, "src/utils"),
        styles: path.resolve(__dirname, "src/styles"),
      },
    },
  });
};

// Slug 만들기
export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: "slug", value: slug });
  }
};

// 새로운 페이지 만들기
export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const result = await graphql<{
    allMarkdownRemark: { edges: { node: { fields: { slug: string } } }[] };
  }>(`
    query resultQuery {
      allMarkdownRemark(
        sort: [
          { frontmatter: { date: DESC } }
          { frontmatter: { title: DESC } }
        ]
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(__dirname, "src/templates/postTemplate.tsx"),
      context: { slug: node.fields.slug },
    });
  });
};

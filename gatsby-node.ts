import { graphql, type GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

// Alias 설정하기
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, "src/components"),
                hooks: path.resolve(__dirname, "src/hooks"),
                styles: path.resolve(__dirname, "src/styles"),
            }
        }
    })
}

// Slug 만들기
export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode });

        createNodeField({ node, name: "slug", value: slug });
    }
}

// 게시글 페이지 만들기
export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
}
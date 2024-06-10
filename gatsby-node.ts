import type { GatsbyNode } from "gatsby";
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
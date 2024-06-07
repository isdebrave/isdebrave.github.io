import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
    siteMetadata: {
        title: `blog`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-emtion`
    ],
}

export default config;

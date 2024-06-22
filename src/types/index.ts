import { IGatsbyImageData } from "gatsby-plugin-image";

export type SiteType = {
    siteMetadata: {
        title: string;
    };
}

export type AllMarkdownRemarkType = {
    edges: EdgesType[];
}

export type EdgesType = {
    node: {
        id: string;
        fields: {
            slug: string;
        };
        frontmatter: FrontmatterType;
    };
}

export type FrontmatterType = {
    title: string;
    summary: string;
    date: string;
    categories: string[];
    thumbnail: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}
import styled from "@emotion/styled";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type PostImageType = {
  image: IGatsbyImageData;
};

const ImageWrapper = styled.div`
  height: 400px;
  text-align: center;

  .gatsby-image-wrapper {
    max-width: 768px;
    height: 100%;
    border-radius: 7px;
    overflow: hidden;
    object-fit: cover;
  }
`;

const PostImage: React.FC<PostImageType> = (props) => {
  const { image } = props;

  return (
    <ImageWrapper>
      <GatsbyImage image={image} alt="postBackground" />
    </ImageWrapper>
  );
};

export default PostImage;

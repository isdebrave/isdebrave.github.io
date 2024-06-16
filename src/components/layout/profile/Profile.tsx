import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ProfileImage = styled(GatsbyImage)`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const SelfIntro = styled.div`
  text-align: center;

  & > p {
    font-style: italic;
    margin: 10px 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Profile = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "profile" }) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 80, placeholder: DOMINANT_COLOR)
        }
      }
    }
  `);
  const { gatsbyImageData } = data.file.childImageSharp;

  return (
    <>
      <ProfileImage image={gatsbyImageData} alt="profileImage" />
      <SelfIntro>
        <h3>김석윤</h3>
        <span>나만의 개발 일지 😃</span>
        <p>오늘도 즐거운 하루 보내세요!</p>
      </SelfIntro>
    </>
  );
};

export default Profile;

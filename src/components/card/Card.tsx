import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";

const CardWrapper = styled(Link)`
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Date = styled.h4`
  font-weight: 400;
  opacity: 0.5;
`;

const CategoryList = styled.ul`
  margin: 10px 0;
  display: flex;
  gap: 10px;
`;

const CategoryItem = styled.li`
  background-color: black;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
`;

const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Card = () => {
  return (
    <CardWrapper to="#">
      <img
        src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1718064000&semt=sph"
        alt="cardBackground"
      />
      <div style={{ padding: "15px" }}>
        <h2>네트워크</h2>
        <Date style={{ fontWeight: "400", opacity: "0.5" }}>2024.06.12</Date>
        <CategoryList>
          <CategoryItem>JS</CategoryItem>
          <CategoryItem>Webpack</CategoryItem>
          <CategoryItem>React</CategoryItem>
        </CategoryList>
        <Summary>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, iure
          numquam, assumenda laborum quae eius voluptate eos excepturi quisquam
          vitae quas minima. Eius omnis, esse provident in dolores at beatae.
        </Summary>
      </div>
    </CardWrapper>
  );
};

export default Card;

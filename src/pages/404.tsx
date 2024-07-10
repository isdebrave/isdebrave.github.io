import styled from "@emotion/styled";
import Template from "components/common/Template";
import { navigate } from "gatsby";
import React from "react";

const Message = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 250%;
`;

const Back = styled.span`
  color: #3498db;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <Template>
      <Message>
        <h1>존재하지 않는 페이지입니다.</h1>
        <p>
          <Back onClick={() => navigate(-1)}>이전페이지</Back>로 돌아가기
        </p>
      </Message>
    </Template>
  );
};

export default NotFound;

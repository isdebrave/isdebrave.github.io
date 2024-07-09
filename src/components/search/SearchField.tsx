import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";

type SearchFieldType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchFieldContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 5px 10px;
  background-color: transparent;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  transition: border-bottom 0.3s ease-in-out;

  &:focus {
    border-bottom: 2px solid #ffbe76;
  }
`;

const SearchField: React.FC<SearchFieldType> = (props) => {
  const { value, onChange } = props;

  return (
    <SearchFieldContainer>
      <Input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </SearchFieldContainer>
  );
};

export default SearchField;

import styled from "@emotion/styled";
import { navigate } from "gatsby";
import React, { FormEvent, useState } from "react";

const Form = styled.form`
  width: 300px;
  margin: 0 auto;

  & > input {
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
  }
`;

const Search = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?keyword=${value}`);
    setValue("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
    </Form>
  );
};

export default Search;

import styled from "@emotion/styled";
import { navigate } from "gatsby";
import React, { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchField = styled.div`
  width: 100%;
  max-width: 350px;
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

  @media (max-width: 900px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;

  & > button {
    border: none;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 100px;
    }
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const Search = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?keyword=${value}`);
    setValue("");
  };

  const searchIconHandler = (e: FormEvent<HTMLButtonElement>) => {};

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <SearchField>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
      </SearchField>
      <SearchIcon>
        <button type="button" onClick={searchIconHandler}>
          <IoSearch size={25} />
        </button>
        {/* <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        /> */}
      </SearchIcon>
    </form>
  );
};

export default Search;

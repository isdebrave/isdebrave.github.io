import styled from "@emotion/styled";
import Overlay from "components/Overlay";
import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchIconType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIconClicked: boolean;
  setIsIconClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchIconContainer = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const InputContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 450px;
  padding: 0 30px;

  & > input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 15px;
    border-radius: 100px;
    background-color: white;
    transition: border-bottom 0.3s ease-in-out;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }
`;

const SearchIcon: React.FC<SearchIconType> = (props) => {
  const { value, onChange, isIconClicked, setIsIconClicked } = props;

  return (
    <SearchIconContainer>
      {isIconClicked && (
        <Overlay
          onClick={() => setIsIconClicked(false)}
          color="rgba(0, 0, 0, 0.7)"
        />
      )}

      {isIconClicked && (
        <InputContainer>
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
            value={value}
          />
        </InputContainer>
      )}

      <Button type="button" onClick={() => setIsIconClicked(true)}>
        <IoSearch size={25} />
      </Button>
    </SearchIconContainer>
  );
};

export default SearchIcon;

import { navigate } from "gatsby";
import React, { ChangeEvent, FormEvent, useState } from "react";
import SearchField from "./SearchField";
import SearchIcon from "./SearchIcon";

const Search = () => {
  const [value, setValue] = useState("");
  const [isIconClicked, setIsIconClicked] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?keyword=${encodeURIComponent(value)}`);
    setValue("");
    setIsIconClicked(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      {/* 900px 이상인 경우 */}
      <form style={{ width: "100%" }} onSubmit={onSubmit}>
        <SearchField value={value} onChange={onChange} />
      </form>

      {/* 900px 미만인 경우 */}
      <form style={{ width: "100%" }} onSubmit={onSubmit}>
        <SearchIcon
          value={value}
          onChange={onChange}
          isIconClicked={isIconClicked}
          setIsIconClicked={setIsIconClicked}
        />
      </form>
    </div>
  );
};

export default Search;

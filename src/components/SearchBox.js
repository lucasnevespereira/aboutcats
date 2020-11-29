import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba br3 b--green bg-lightest-blue"
        type="search"
        placeholder="Search Cat"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

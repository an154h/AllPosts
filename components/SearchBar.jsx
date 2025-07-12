import React from "react";

function SearchBar({ onSearchTermChange }) {
  return (
    <input type="text" className="search-bar" placeholder="Search posts..." onChange={(e) => onSearchTermChange(e.target.value)}
    />
  );
}

export default SearchBar;

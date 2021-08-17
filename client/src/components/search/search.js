import React from "react";
import "./search.css";
const Search = ({ handleInput, search }) => {
  return (
    <div>
      <h1 className="center cyan-text text-accent-2">MOVIE DATABASE</h1>
      <div className="row">
        <div className="col  m3 l3"></div>
        <div className="col s12 m6 l6">
          <input
            type="text"
            placeholder="Search for a Movie"
            className="searchbar white-text center"
            onChange={handleInput}
            onKeyPress={search}
          />
      
        </div>
      </div>
    </div>
  );
};
export default Search;

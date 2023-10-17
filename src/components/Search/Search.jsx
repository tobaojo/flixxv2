import React from "react";
import { Form } from "react-router-dom";

const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <div id="alert"></div>
        <Form className="search-form">
          <div className="search-radio">
            <input
              type="radio"
              id="movie"
              name="type"
              value="movie"
              defaultChecked
            />
            <label htmlFor="movies">Movies</label>
            <input type="radio" id="tv" name="type" value="tv" />
            <label htmlFor="movies">TV Shows</label>
          </div>
          <div className="search-flex">
            <input
              type="text"
              name="search"
              id="search-term"
              placeholder="Search..."
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Search;

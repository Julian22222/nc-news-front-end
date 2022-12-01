import { useState, useEffect } from "react";
import Context from "./Context";
import React, { useContext } from "react";

const SortBar = (props) => {
  const { setArticleList, articleList } = props;

  // articleList - array of all articles

  const value = useContext(Context);

  const handleChange = (event) => {
    value.setSortBy(event.target.value);
    console.log(event.target.value);
    console.log(value.sortBy);
  };

  const handleOrder = (event) => {
    console.log(event.target.value);
    value.setOrder(event.target.value);
    
  };


  return (
    <div className="SortingSortByandOrder">
      <label>Sort By: </label>
      <select onChange={handleChange} name="hello" className="SortByOptions">
        <option></option>
        <option value="publishedDate">date</option>
        <option value="votes">votes</option>
        <option value="commentCount">comment count</option>
      </select>
      <span> Order: </span>

      <select onChange={handleOrder}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </div>
  );
};

export default SortBar;

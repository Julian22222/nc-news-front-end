import { useState, useEffect } from "react";
import Context from "./Context";
import React, { useContext } from "react";

const SortBar = (props) => {
  const { setArticleList, articleList } = props;

  // articleList - array of all articles

  const value = useContext(Context);

  // votes={value.votes}
  // article_id={article.article_id}
  // comment_count={value.comment_count}

  const handleChange = (event) => {
    // console.log(event);
    value.setSortBy(event.target.value);
    console.log(event.target.value);
    console.log(value.sortBy);
    //publishedDate,title, votes, commentCount
  };

  const handleOrder = (event) => {
    console.log(event.target.value);
    value.setOrder(event.target.value);
  };

  // useEffect(() => {
  //   if (value.sortBy === "commentCount") {
  //     if (value.order === "desc") {
  //       setArticleList(
  //         [...articleList].sort((a, b) =>
  //           b[value.sortBy].localeCompare(a[value.sortBy])
  //         )
  //       );
  //     }
  //     if (value.order === "ascending") {
  //       setArticleList(
  //         [...articleList].sort((a, b) =>
  //           a[value.sortBy].localeCompare(b[value.sortBy])
  //         )
  //       );
  //     }
  //////////////
  // } else if (value.sortBy !== "created_at" && value.order === "descending") {
  //   setArticleList(
  //     [...articleList].sort((a, b) => b[value.sortBy] - a[value.sortBy])
  //   );
  // } else {
  //   setArticleList(
  //     [...articleList].sort((a, b) => a[value.sortBy] - b[value.sortBy])
  //   );
  /////////////////////////////////////
  //   }
  // }, [value.sortBy, value.order]);

  /////////////////////////////////////

  return (
    <div className="SortingSortByandOrder">
      <label>Sort By: </label>
      <select onChange={handleChange} name="hello" className="SortByOptions">
        {/* <option defaultValue={setSortBy("")}></option> */}
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

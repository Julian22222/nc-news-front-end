import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CodingElement from "./components/CodingElement";
import IndividualArticle from "./components/IndividualArticle";
import Context from "./components/Context";

function App() {
  const [pleaselogin, setPleaseLogin] = useState(false);
  //if pleaselogin(true)-> show message please login, when user wants to leave comment
  const [isDelete, setIsDelete] = useState(false);

  // const [user, setUser] = useState({ nickName: "", name: "", password: "" });
  //user for form password,nickname,name

  const [cardUser, setCardUser] = useState("");

  //user for cards
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const value = {
    pleaselogin,
    setPleaseLogin,
    // user,
    // setUser,
    setIsDelete,
    isDelete,
    cardUser,
    setCardUser,
    sortBy,
    setSortBy,
    setOrder,
    order,
  };
  //delete user from Individual article, change it to context
  return (
    <BrowserRouter>
      <Context.Provider value={value}>
        <div className="App">
          <Header setSortBy={setSortBy} />
          <Routes>
            <Route
              path="/"
              element={<Homepage sortBy={sortBy} setSortBy={setSortBy} />}
            />
            <Route
              path="/:topic"
              element={<CodingElement setSortBy={setSortBy} />}
            />
            <Route
              path="/articles/:article_id"
              element={<IndividualArticle />}
            />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;

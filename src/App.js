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
  const [isDelete, setIsDelete] = useState(false);
  const [user, setUser] = useState({ nickName: "", name: "", password: "" });
  const [sortBy, setSortBy] = useState();

  const value = {
    pleaselogin,
    setPleaseLogin,
    user,
    setUser,
    setIsDelete,
    isDelete,
  };
  //delete user from Individual article, change it to context
  return (
    <BrowserRouter>
      <Context.Provider value={value}>
        <div className="App">
          <Header user={user} setUser={setUser} setSortBy={setSortBy} />
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
              element={<IndividualArticle user={user} setUser={setUser} />}
            />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;

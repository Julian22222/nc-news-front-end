import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import NavBarTopics from "./components/NavBarTopics";
import CodingElement from "./components/CodingElement";

function App() {
  const [articleList, setArticleList] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBarTopics />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                articleList={articleList}
                setArticleList={setArticleList}
              />
            }
          />
          <Route
            path="/:topic"
            element={
              <CodingElement
                articleList={articleList}
                setArticleList={setArticleList}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

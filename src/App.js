import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CodingElement from "./components/CodingElement";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  const [user, setUser] = useState({ nickName: "", name: "", password: "" });

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:topic" element={<CodingElement />} />
          <Route
            path="/articles/:article_id"
            element={<IndividualArticle user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CodingElement from "./components/CodingElement";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:topic" element={<CodingElement />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

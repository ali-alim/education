import Categories from "./components/Categories/Categories";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from "./pages/Web3/Web3";
import Home from "./pages/Home"
import Comments from "./pages/Comments"
import ReactJS from "./pages/ReactJS/ReactJS"

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<Categories />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/react" element={<ReactJS />} />
        {/* </Route> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

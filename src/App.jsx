import { Routes, Route } from "react-router-dom";
import { Links } from "./components/Links";
import { ShowApp } from "./components/ShowApp";
import { MovieApp } from "./components/MovieApp";
import { Home } from "./components/Home";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="MovieApp" element={<MovieApp />}></Route>

          <Route path="ShowApp" element={<ShowApp />}></Route>
        </Routes>

        {window.location.pathname === "/" && <Links />}
      </BrowserRouter>
    </>
  );
}

export default App;

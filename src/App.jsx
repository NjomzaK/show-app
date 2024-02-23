import { Routes, Route } from "react-router-dom";
import { Links } from "./components/Links";
import { ShowApp } from "./components/ShowApp";
import { MovieApp } from "./components/MovieApp";
import { Home } from "./components/Home";
import { Box } from "@mui/joy";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="MovieApp" element={<MovieApp />}></Route>

        <Route path="ShowApp" element={<ShowApp />}></Route>
      </Routes>

      <Links />
    </>
  );
}

export default App;

import LocalRoutes from "./LocalRoutes";
import Navigation from "./Navigation";
import FactBackground from "./FactBackground";
import FactIntro from "./FactIntro";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Card from "./Card";
import data from "../data";
export default function Facts() {
  const pages = data.slice(18, 111);
  const intro = data.slice(18, 21);
  // console.log(intro);
  return (
    <>
      {/* <h1>Facts</h1> */}
      <Outlet />
      {/* <li
        class="page-item"
        // class={`page-item ${activeLink === page ? "active" : ""}`}
        // onClick={() => setActiveLink(page)}
      >
        <Link class="page-link" to={`/facts/introduction/${18}`}>
          {18}
        </Link>
      </li>
      <Routes>
        <Route
          index
          path={`/introduction/${18}`}
          element={<Card data={pages[0]} />}
        />
        <Route
          path={`/introduction/${18}`}
          element={<Card data={pages[0]} />}
        />
      </Routes> */}
    </>
  );
}

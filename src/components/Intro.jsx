import { useState } from "preact/hooks";
import { Link, Routes, Route } from "react-router-dom";
import Card from "./Card";
import data from "../data";

export default function Intro() {
  const pages = data.slice(1, 8);
  const [activeLink, setActiveLink] = useState(1);

  const navigation = pages.map(({ page }) => (
    <li
      class={`page-item ${activeLink === page ? "active" : ""}`}
      onClick={() => setActiveLink(page)}
    >
      <Link class="page-link" to={`${page}`}>
        {page}
      </Link>
    </li>
  ));

  return (
    <>
      <h1>Introduction</h1>
      <nav aria-label="Page navigation example">
        <ul class="pagination">{navigation}</ul>
      </nav>
      <Routes>
        <Route index element={<Card data={pages[0]} />} />
        <Route path="/1" element={<Card data={pages[0]} />} />
        <Route path="/2" element={<Card data={pages[1]} />} />
        <Route path="/3" element={<Card data={pages[2]} />} />
        <Route path="/4" element={<Card data={pages[3]} />} />
        <Route path="/5" element={<Card data={pages[4]} />} />
        <Route path="/6" element={<Card data={pages[5]} />} />
        <Route path="/7" element={<Card data={pages[6]} />} />
      </Routes>
    </>
  );
}

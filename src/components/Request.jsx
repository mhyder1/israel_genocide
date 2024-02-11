import data from "../data";
import Card from "./Card";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
export default function Request() {
  const pages = data.slice(113, 118);

  // const navigation = pages.map(({ page }) => (
  //   <li
  //     class={`page-item ${activeLink === page ? "active" : ""}`}
  //     onClick={() => setActiveLink(page)}
  //   >
  //     <Link class="page-link" to={`${page}`}>
  //       {page}
  //     </Link>
  //   </li>
  // ));

  return (
    <>
      <h1>Request for provisional measures</h1>
      <Navigation pages={pages} />
      {/* {pages.map((item) => (
        <Card data={item} />
      ))} */}
      <Routes>
        <Route index element={<Card data={pages[0]} />} />
        <Route path="/112" element={<Card data={pages[0]} />} />
        <Route path="/113" element={<Card data={pages[1]} />} />
        <Route path="/114" element={<Card data={pages[2]} />} />
        <Route path="/115" element={<Card data={pages[3]} />} />
        <Route path="/116" element={<Card data={pages[4]} />} />
      </Routes>
    </>
  );
}

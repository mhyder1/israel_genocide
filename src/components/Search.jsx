import { useState } from "preact/hooks";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import data from "../data";
import Card from "./Card";
export default function Search() {
  const [formData, setFormData] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData || formData.length < 4) return;
    const filteredData = data.filter((section) => {
      return section.content.toLowerCase().includes(formData.toLowerCase());
    });
    console.log(filtered);
    setFiltered(filteredData);
  };

  const localRoutes = filtered.map(({ page }) => (
    <Route
      key={page}
      path={`/${page}`}
      element={<Card data={filtered[page - 1]} />}
    />
  ));
  console.log(filtered.length);
  const navigation = filtered.map(({ page }) => (
    <li
      class="page-item"
      //   class={`page-item ${activeLink === page ? "active" : ""}`}
      //   onClick={() => setActiveLink(page)}
    >
      <Link class="page-link" to={`${page}`}>
        {page}
      </Link>
    </li>
  ));

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          name="search"
          value={formData}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* <Navigation pages={filtered} /> */}
      <nav aria-label="Page navigation example">
        <ul class="pagination">{navigation}</ul>
      </nav>
      <div>
        {filtered.map((section) => (
          <Card data={section} />
        ))}
      </div>
      <Routes>{localRoutes}</Routes>
    </>
  );
}

import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
import data from "../data";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function searchWord(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    return regex.test(text);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm || searchTerm.length < 4) return;
    // also need to to search texts that not only in the content
    const filteredData = data.filter((section) => {
      // if (typeof section.content === "string") {
      //   return section.content.toLowerCase().includes(searchTerm.toLowerCase());
      // }
      // return section.content[0].toLowerCase().includes(searchTerm.toLowerCase());
      return searchWord(section.content, searchTerm) || section?.subtext?.some(text => searchWord(text, searchTerm))
    });

    setFiltered(filteredData);
  };

  const reset = () => {
    setFiltered([]);
    setSearchTerm("");
    navigate("/search");
  };
  return (
    <section class="page">
      {/* <h1>Search</h1> */}
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="search"
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-sm" type="submit">
          Search
        </button>
        <button className="btn btn-sm" onClick={reset}>
          Clear
        </button>
        {/* <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-sm-primary" type="button">
            Search
          </button>
          <button class="btn btn-sm-primary" type="button">
            Reset
          </button>
        </div> */}
      </form>

      <LocalRoutes pages={filtered} searchWord={searchTerm} />
      <Navigation pages={filtered} />
    </section>
  );
}

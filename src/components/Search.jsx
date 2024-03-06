import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
import data from "../data";
export default function Search() {
  const [formData, setFormData] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData || formData.length < 4) return;
    const filteredData = data.filter((section) => {
      if (typeof section.content === "string") {
        return section.content.toLowerCase().includes(formData.toLowerCase());
      }
      return section.content[0].toLowerCase().includes(formData.toLowerCase());
    });

    setFiltered(filteredData);
  };

  const reset = () => {
    setFiltered([]);
    setFormData("");
    navigate("/search");
  };
  return (
    <section class="page">
      {/* <h1>Search</h1> */}
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="search"
          name="search"
          value={formData}
          onChange={handleChange}
        />
        <button className="btn btn-sm" type="submit">Search</button>
        <button className="btn btn-sm" onClick={reset}>Clear</button>
        {/* <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-sm-primary" type="button">
            Search
          </button>
          <button class="btn btn-sm-primary" type="button">
            Reset
          </button>
        </div> */}
      </form>

      <LocalRoutes pages={filtered} searchWord={formData} />
      <Navigation pages={filtered} />
    </section>
  );
}

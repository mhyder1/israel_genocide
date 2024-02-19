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
        <button onClick={reset}>Clear</button>
      </form>
      <Navigation pages={filtered} />
      <LocalRoutes pages={filtered} searchWord={formData} />
    </>
  );
}

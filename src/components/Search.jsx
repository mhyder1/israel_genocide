import { useState } from "preact/hooks";
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
    if (!formData || formData.length < 5) return;
    const filteredData = data.filter((section) => {
      return section.content.toLowerCase().includes(formData.toLowerCase());
    });
    console.log(filtered);
    setFiltered(filteredData);
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
      </form>
      <div>
        {filtered.map((section) => (
          <Card data={section} />
        ))}
      </div>
    </>
  );
}

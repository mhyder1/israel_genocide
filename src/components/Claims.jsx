import data from "../data";
import Card from "./Card";
export default function Claims() {
  const pages = data.slice(111, 112);
  return (
    <>
      <h1>The claims of South Africa</h1>
      {pages.map((item) => (
        <Card data={item} />
      ))}
    </>
  );
}

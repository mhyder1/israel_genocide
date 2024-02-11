import data from "../data";
import Card from "./Card";
export default function Reservation() {
  const pages = data.slice(149, 150);
  return (
    <>
      <h1>Reservation of rights</h1>
      {pages.map((page) => (
        <Card data={page} />
      ))}
    </>
  );
}

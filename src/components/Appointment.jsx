import data from "../data";
import Card from "./Card";
export default function Appointment() {
  const pages = data.slice(150, 153);
  return (
    <>
      <h1>Appointment of agent</h1>
      {pages.map((page) => (
        <Card data={page} />
      ))}
    </>
  );
}

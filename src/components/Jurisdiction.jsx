import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
import data from "../data";
export default function Jurisdiction() {
  const pages = data.slice(9, 18);
  console.log(pages);
  return (
    <>
      <h1>Jurisdiction</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

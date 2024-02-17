import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function FactExpressionsOfGenocide() {
  console.log(data.slice(101, 109));
  const pages = data.slice(101, 109);
  return (
    <>
      <h1>fact expressions of genocide</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

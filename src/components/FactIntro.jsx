import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function FactIntro() {
  const pages = data.slice(18, 21);
  return (
    <>
      <h1>The facts / Introduction</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

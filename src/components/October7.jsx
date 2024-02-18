import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function October7() {
  const pages = data.slice(40, 43);
  console.log(pages);
  return (
    <>
      <h1>October 7</h1>
      {/* <Navigation pages={pages} />
      <LocalRoutes pages={pages} /> */}
    </>
  );
}

import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function Gaza() {
  const pages = data.slice(21, 32);
  console.log(pages);
  return (
    <>
      <h1>The Gaza strip</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

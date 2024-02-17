import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function WestBank() {
  const pages = data.slice(101, 109);
  console.log(pages);
  return (
    <>
      <h1>The West Bank</h1>
      {/* <Navigation pages={pages} />
      <LocalRoutes pages={pages} /> */}
    </>
  );
}

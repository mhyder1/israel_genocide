import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function FactRecognitionOfGenocide() {
  const pages = data.slice(108, 110);
  console.log(pages);
  return (
    <>
      <h1>The facts / Introduction</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

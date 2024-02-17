import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function Request() {
  const pages = data.slice(113, 118);
  return (
    <>
      <h1>Request for provisional measures</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

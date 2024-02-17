import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function Appointment() {
  const pages = data.slice(150, 153);
  return (
    <>
      <h1>Appointment of agent</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

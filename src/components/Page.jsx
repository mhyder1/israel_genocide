import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function Page({ data }) {
  console.log(data);
  return (
    <>
      <h1>The Gaza strip</h1>
      <Navigation pages={data} />
      <LocalRoutes pages={data} />
    </>
  );
}

import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
import Crumbs from "./Crumbs";
export default function Page({ data }) {
  // console.log(data);
  return (
    <section
      class="page"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   height: "100vh",
      //   justifyContent: "space-between",
      // }}
    >
      {/* <h1>The Gaza strip</h1> */}
      {/* <Crumbs /> */}
      <LocalRoutes pages={data} />
      <Navigation pages={data} />
    </section>
  );
}

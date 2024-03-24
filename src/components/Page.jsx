import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
import Crumbs from "./Crumbs";
export default function Page({ data }) {
  return (
    <section
      class="page"
    >
      {/* <Crumbs /> */}
      <LocalRoutes pages={data} />
      <Navigation pages={data} />
    </section>
  );
}

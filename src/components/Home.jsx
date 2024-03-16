import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Home() {
  return (
    <div class="home">
      <h1>
        South Africa's Case at the International Court of Justice Against Israel
        for Committing Genocide in the Gaza Strip
      </h1>
      {/* <Nav /> */}
      <section class="button-menu">
        <Link to="/introduction">
          <button type="button" class="btn btn-secondary btn-lg">
            Introduction
          </button>
        </Link>
        <Link to="/jurisdiction">
          <button type="button" class="btn btn-secondary btn-lg">
            Jurisdiction
          </button>
        </Link>
        <Link to="/facts">
          <button type="button" class="btn btn-secondary btn-lg">
            The Facts
          </button>
        </Link>
        <Link to="/claims">
          <button type="button" class="btn btn-secondary btn-lg">
            Claims of South Africa
          </button>
        </Link>
        <Link to="/search">
          <button type="button" class="btn btn-secondary btn-lg">
            Search
          </button>
        </Link>
      </section>
    </div>
  );
}

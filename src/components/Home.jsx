import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Home() {
  const style = {
    display: "flex",
  };
  return (
    <div class="home">
      {/* <h1>
        Better understand the International Court of Justice Crime of Genocide
        in the Gaza Strip
      </h1> */}
      <Nav />
      {/* <section class="button-menu">
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
        <Link to="/facts/genocidal_acts">
          <button type="button" class="btn btn-secondary btn-lg">
            Genocidal Acts
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
      </section>*/}
      {/* <h3>APPLICATION INSTITUTING PROCEEDINGS</h3>
      <p>
        To the Registrar of the International Court of Justice, the undersigned,
        being duly authorised by the Government of the Republic of South Africa,
        state as follows:
      </p>
      <p>
        In accordance with Articles 36 (1) and 40 of the Statute of the Court
        and Article 38 of the Rules of Court, I have the honour to submit this
        Application instituting proceedings in the name of the Republic of South
        Africa (“South Africa”) against the State of Israel (“Israel”). Pursuant
        to Article 41 of the Statute, the Application includes a request that
        the Court indicate provisional measures to protect the rights invoked
        herein from imminent and irreparable loss.
      </p> */}
    </div>
  );
}

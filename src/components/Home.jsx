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
        <Link to="/relief">
          <button type="button" class="btn btn-secondary btn-lg">
            The Relief Sought
          </button>
        </Link>
        <Link to="/request">
          <button type="button" class="btn btn-secondary btn-lg">
            Request For Provisional Measures
          </button>
        </Link>
        <Link to="/reservation">
          <button type="button" class="btn btn-secondary btn-lg">
            Reservation Of Rights
          </button>
        </Link>
        <Link to="/appointment">
          <button type="button" class="btn btn-secondary btn-lg">
            Appointment Of Agent
          </button>
        </Link>
      </section>
      {/* <h1>Test</h1>
      <video controls preload="metadata">
        <source
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          type="video/mp4"
        />
        Video not supported.
      </video>
      <h1>Current</h1>
      <div className="content">
        <video
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          controls
          playsInline
        />
      </div> */}
    </div>
  );
}

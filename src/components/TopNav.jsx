import { Link, NavLink, useLocation } from "react-router-dom";
export default function TopNav() {
  const location = useLocation();
  return (
    <div class="top-nav">
      <ul>
        <li>
          <NavLink
            to="/introduction"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            I. Intro
          </NavLink>
          <div className="menu">
            <h4>Introduction</h4>
            <p>Sections 1 - 8</p>
            <p>
              Basic outline of the genocide case by South Africa against Israel
            </p>
          </div>
        </li>
        <li>
          <NavLink
            to="/jurisdiction"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            II. Jurisdiction
          </NavLink>
          <div className="menu">
            <h4>Jurisdiction Of The Court</h4>
            <p>Sections 9 - 17</p>
            <p>
              Evidence of South Africa's jurisdiction to bring the genocide case
              against Israel
            </p>
          </div>
        </li>
        <li>
          <NavLink
            to="/facts/introduction"
            className={() =>
              location.pathname.includes("/facts") ? "menu-active" : ""
            }
          >
            III. Facts
          </NavLink>
          <div className="menu">
            <h4>The Facts</h4>
            <p>Sections 18 - 109</p>
            <p>
              This contains the main evidence of Israeli Genocide. Its the
              longest and most important part of the document.
            </p>
            {/* **************************** */}
            <section className="menu-body">
              <div className="menu-row row-1">
                <div className="menu-section">
                  <h4>Let's Get Started</h4>
                  <div className="menu-link">
                    <Link to="/facts/introduction">Introduction</Link>
                  </div>
                </div>
                <div className="menu-section">
                  <h4>A Little Background</h4>
                  <div className="menu-link">
                    <NavLink to="/facts/background/gaza">
                      The Gaza Strip
                    </NavLink>
                  </div>

                  <div className="menu-link">
                    <Link to="/facts/background/west_bank">
                      The West Bank (including East Jerusalem)
                    </Link>
                  </div>

                  <div className="menu-link">
                    <Link to="/facts/background/october_7">
                      The attacks in Israel of 7 October 2023
                    </Link>
                  </div>
                </div>
                <div className="menu-section">
                  <h4>What Israel Has Been Up To</h4>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts">
                      Genocidal Acts Committed against the Palestinian People
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/killing">
                      Killing Palestinians in Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/body_mental">
                      Causing Serious Bodily and Mental Harm to Palestinians in
                      Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/expulsion">
                      Mass expulsion from homes and displacement of Palestinians
                      in Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/food_water">
                      Deprivation of access to adequate food and water to
                      Palestinians in Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/shelter">
                      Deprivation of access to adequate shelter, clothes,
                      hygiene and sanitation to Palestinians in Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/medical">
                      Deprivation of adequate medical assistance to Palestinians
                      in Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/destruction">
                      Destruction of Palestinian life in Gaza
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/facts/genocidal_acts/prevent_birth">
                      Imposing measures intended to prevent Palestinian births
                    </Link>
                  </div>
                  <div className="menu-link"></div>
                </div>
              </div>
              <div className="menu-row row-2">
                <div className="menu-section">
                  <h4>They Said What?!?!</h4>
                  <div className="menu-link">
                    <Link to="/facts/expressions_of_genocide">
                      Expressions of Genocidal Intent against the Palestinian
                      People by Israeli State Officials and Others
                    </Link>
                  </div>
                </div>
                <div className="menu-section">
                  <h4>Yeah It's Genocide</h4>
                  <div className="menu-link">
                    <Link to="/facts/recognition_of_genocide">
                      Recognition of Israel’s genocidal intent against
                      Palestinians
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </li>
        <li>
          <NavLink
            to="/claims"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            IV. Claims
          </NavLink>
          <div className="menu">
            <h4>The Claims Of South Africa</h4>
            <p>Section 110</p>
            <p>Claims stuff</p>
          </div>
        </li>
        <li>
          <Link
            to="/relief"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            V. Relief
          </Link>
          <div className="menu">
            <h4>The Relief Sought</h4>
            <p>Section 111</p>
            <p>
              Basic outline of the genocide case by South Africa against Israel
            </p>
          </div>
        </li>
        <li>
          <NavLink
            to="/request"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            VI. Request
          </NavLink>
          <div className="menu">
            <h4>Request For Provisional Measures</h4>
            <p>Sections 112 - 147</p>
            {/* <p>Have to find out</p> */}
            <section className="menu-body">
              <div className="menu-row">
                <div className="menu-section">
                  <h4>Additional atrocities that Israel is committing</h4>
                  <div className="menu-link">
                    <Link to="/request">Request For Provisional Measures</Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/request/compelling">
                      Compelling Circumstances Require the Indication of
                      Provisional Measures
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/request/prima_facie">
                      The Prima Facie Jurisdiction of the Court
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/request/rights">
                      The Rights the Protection of Which Is Sought, their
                      Plausible Character and the Link between such Rights and
                      the Measures Requested
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/request/risk">
                      The Risk of Irreparable Prejudice and Urgency
                    </Link>
                  </div>
                  <div className="menu-link">
                    <Link to="/request/provisional">
                      Provisional Measures Requested
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </li>
        <li>
          <NavLink
            to="/reservation"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            VII. Reservation
          </NavLink>
          <div className="menu">
            <h4>Reservation Of Rights</h4>
            <p>Section 148</p>
            <p>Legal stuff</p>
          </div>
        </li>
        <li>
          <NavLink
            to="/appointment"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            VIII. Appointment
          </NavLink>
          <div className="menu">
            <h4>Appointment Of Agent</h4>
            <p>Sections 149 - 151</p>
            <p>More Legal stuff</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

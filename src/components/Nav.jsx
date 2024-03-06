import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div style={{display: "flex",height: "100%", overflow: "auto"}}>

      <ul class="navigation">
        <li value="0">
          <Link to="/">Home</Link>
        </li>
        <li type="I">
          <Link to="/introduction">Introduction</Link>
          <em class="page-range">(1 - 7)</em>
        </li>
        <li type="I">
          <Link to="/jurisdiction">Jurisdiction of the court</Link>
          <em class="page-range">(8 - 17)</em>
        </li>
        <li type="I">
          <Link to="/facts">The facts</Link>
          <ul>
            <li type="A">
              <Link to="/facts/introduction">Introduction</Link>
              <em class="page-range">(18 - 20)</em>
            </li>
            <li type="A">
              <Link to="/facts/background">Background</Link>
              <ul>
                <li type="1">
                  <Link to="/facts/background/gaza">The Gaza Strip</Link>
                  <em class="page-range">(21 - 31)</em>
                </li>
                <li type="1">
                  <Link to="/facts/background/west_bank">
                    The West Bank (including East Jerusalem)
                  </Link>
                  <em class="page-range">(32 - 39)</em>
                </li>
                <li type="1">
                  <Link to="/facts/background/october_7">
                    The attacks in Israel of 7 October 2023
                  </Link>
                  <em class="page-range">(40 - 42)</em>
                </li>
              </ul>
            </li>
            <li type="A">
              <Link to="/facts/genocidal_acts">
                Genocidal Acts Committed against the Palestinian People
              </Link>
              <em class="page-range">(43 - 44)</em>
              <ul>
                <li type="1">
                  <Link to="/facts/genocidal_acts/killing">
                    Killing Palestinians in Gaza
                  </Link>
                  <em class="page-range">(45 - 50)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/body_mental">
                    Causing Serious Bodily and Mental Harm to Palestinians in
                    Gaza
                  </Link>
                  <em class="page-range">(51 - 54)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/expulsion">
                    Mass expulsion from homes and displacement of Palestinians
                    in Gaza
                  </Link>
                  <em class="page-range">(55 - 60)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/food_water">
                    Deprivation of access to adequate food and water to
                    Palestinians in Gaza
                  </Link>
                  <em class="page-range">(61 - 70)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/shelter">
                    Deprivation of access to adequate shelter, clothes, hygiene
                    and sanitation to Palestinians in Gaza
                  </Link>
                  <em class="page-range">(71 - 75)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/medical">
                    Deprivation of adequate medical assistance to Palestinians
                    in Gaza
                  </Link>
                  <em class="page-range">(76 - 87)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/destruction">
                    Destruction of Palestinian life in Gaza
                  </Link>
                  <em class="page-range">(88 - 94)</em>
                </li>
                <li type="1">
                  <Link to="/facts/genocidal_acts/prevent_birth">
                    Imposing measures intended to prevent Palestinian births
                  </Link>
                  <em class="page-range">(95 - 100)</em>
                </li>
              </ul>
            </li>
            <li type="A">
              <Link to="/facts/expressions_of_genocide">
                Expressions of Genocidal Intent against the Palestinian People
                by Israeli State Officials and Others
              </Link>
              <em class="page-range">(101 - 107)</em>
            </li>
            <li type="A">
              <Link to="/facts/recognition_of_genocide">
                Recognition of Israel’s genocidal intent against Palestinians
              </Link>
              <em class="page-range">(108 - 109)</em>
            </li>
          </ul>
        </li>
        <li type="I">
          <Link to="/claims">The claims of South Africa</Link>
          <em class="page-range">(110)</em>
        </li>
        <li type="I">
          <Link to="/relief">The relief sought</Link>
          <em class="page-range">(111)</em>
        </li>
        <li type="I">
          <Link to="/request">Request for provisional measures</Link>
          <em class="page-range">(112 - 116)</em>
          <ul>
            <li type="A">
              <Link to="/request/compelling">
                Compelling Circumstances Require the Indication of Provisional
                Measures
              </Link>
              <em class="page-range">(117 - 119)</em>
            </li>
            <li type="A">
              <Link to="/request/prima_facie">
                The Prima Facie Jurisdiction of the Court
              </Link>
              <em class="page-range">(120 - 128)</em>
            </li>
            <li type="A">
              <Link to="/request/rights">
                The Rights the Protection of Which Is Sought, their Plausible
                Character and the Link between such Rights and the Measures
                Requested
              </Link>
              <em class="page-range">(129 - 135)</em>
            </li>
            <li type="A">
              <Link to="/request/risk">
                The Risk of Irreparable Prejudice and Urgency
              </Link>
              <em class="page-range">(136 - 143)</em>
            </li>
            <li type="A">
              <Link to="/request/provisional">
                Provisional Measures Requested
              </Link>
              <em class="page-range">(144 - 147)</em>
            </li>
          </ul>
        </li>
        <li type="I">
          <Link to="/reservation">Reservation of rights</Link>
          <em class="page-range">(148)</em>
        </li>
        <li type="I">
          <Link to="/appointment">Appointment of agent</Link>
          <em class="page-range">(149 - 151)</em>
        </li>
      </ul>
        <Link className="search-link" to="/search">Search</Link>
    </div>
  );
}

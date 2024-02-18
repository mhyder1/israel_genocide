import { useState, useEffect } from "preact/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./app.css";
import parse from "html-react-parser";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Facts from "./components/Facts";
import Intro from "./components/Intro";
import Jurisdiction from "./components/Jurisdiction";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import FactIntro from "./components/FactIntro";
import FactBackground from "./components/FactBackground";
import FactGenocidalActs from "./components/FactGenocidalActs";
import Request from "./components/Request";
import Page from "./components/Page";
import data from "./data";
import { getData } from "./utils/getData";
// const getData = (start, end) => data.slice(start, end);

export function App() {
  return (
    <div class="container">
      <h1>ICJ</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>(1 - 7)
        </li>
        <li>
          <Link to="/jurisdiction">Jurisdiction of the court</Link>(8 - 17)
        </li>
        <li>
          <Link to="/facts">The facts</Link>
          <ul>
            <li>
              <Link to="/facts/introduction">Introduction</Link>(18 - 20)
            </li>
            <li>
              <Link to="/facts/background">Background</Link>
              <ul>
                <li>
                  <Link to="/facts/background/gaza">The Gaza Strip</Link>(21 -
                  31)
                </li>
                <li>
                  <Link to="/facts/background/west_bank">
                    The West Bank (including East Jerusalem)
                  </Link>
                  (32 - 39)
                </li>
                <li>
                  <Link to="/facts/background/october_7">
                    The attacks in Israel of 7 October 2023
                  </Link>
                  (40 - 42)
                </li>
              </ul>
            </li>
            <li>
              <Link to="/facts/genocidal_acts">Genocidal acts</Link>(43 - 44)
              <ul>
                <li>
                  <Link to="/facts/genocidal_acts/killing">
                    Killing Palestinians in Gaza
                  </Link>
                  (45 - 50)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/body_mental">
                    Causing Serious Bodily and Mental Harm to Palestinians in
                    Gaza
                  </Link>
                  (51 - 54)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/expulsion">
                    Mass expulsion from homes and displacement of Palestinians
                    in Gaza
                  </Link>
                  (55 - 60)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/food_water">
                    Deprivation of access to adequate food and water to
                    Palestinians in Gaza
                  </Link>
                  (61 - 70)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/shelter">
                    Deprivation of access to adequate shelter, clothes, hygiene
                    and sanitation to Palestinians in Gaza
                  </Link>
                  (71 - 75)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/medical">
                    Deprivation of adequate medical assistance to Palestinians
                    in Gaza
                  </Link>
                  (76 - 87)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/destruction">
                    Destruction of Palestinian life in Gaza
                  </Link>
                  (88 - 94)
                </li>
                <li>
                  <Link to="/facts/genocidal_acts/prevent_birth">
                    Imposing measures intended to prevent Palestinian births
                  </Link>
                  (95 - 100)
                </li>
              </ul>
            </li>
            <li>
              <Link to="/facts/expressions_of_genocide">
                Expressions of Genocidal Intent against the Palestinian People
                by Israeli State Officials and Others
              </Link>
              (101 - 107)
            </li>
            <li>
              <Link to="/facts/recognition_of_genocide">
                Recognition of Israel’s genocidal intent against Palestinians
              </Link>
              (108 - 109)
            </li>
          </ul>
        </li>
        <li>
          <Link to="/claims">The claims of South Africa</Link>(110)
        </li>
        <li>
          <Link to="/relief">The relief sought</Link>(111)
        </li>
        <li>
          <Link to="/request">Request for provisional measures</Link>(112 - 116)
          <ul>
            <li>
              <Link to="/request/compelling">
                Compelling Circumstances Require the Indication of Provisional
                Measures
              </Link>
              (117 - 119)
            </li>
            <li>
              <Link to="/request/prima_facie">
                The Prima Facie Jurisdiction of the Court
              </Link>
              (120 - 128)
            </li>
            <li>
              <Link to="/request/rights">
                The Rights the Protection of Which Is Sought, their Plausible
                Character and the Link between such Rights and the Measures
                Requested
              </Link>
              (129 - 135)
            </li>
            <li>
              <Link to="/request/risk">
                The Risk of Irreparable Prejudice and Urgency
              </Link>
              (136 - 143)
            </li>
            <li>
              <Link to="/request/provisional">
                Provisional Measures Requested
              </Link>
              (144 - 147)
            </li>
          </ul>
        </li>
        <li>
          <Link to="/reservation">Reservation of rights</Link>(148)
        </li>
        <li>
          <Link to="/appointment">Appointment of agent</Link>(149 - 151)
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction/*" element={<Intro />} />
        <Route path="/jurisdiction/*" element={<Jurisdiction />} />
        <Route path="/facts/*" element={<Facts />}>
          <Route path="introduction/*" element={<FactIntro />} />
          <Route path="background/*" element={<FactBackground />}>
            <Route path="gaza/*" element={<Page data={getData(21, 32)} />} />
            <Route
              path="west_bank/*"
              element={<Page data={getData(32, 40)} />}
            />
            <Route
              path="october_7/*"
              element={<Page data={getData(40, 43)} />}
            />
          </Route>
          <Route path="genocidal_acts/*" element={<FactGenocidalActs />}>
            <Route path="killing/*" element={<Page data={getData(45, 51)} />} />
            <Route
              path="body_mental/*"
              element={<Page data={getData(51, 55)} />}
            />
            <Route
              path="expulsion/*"
              element={<Page data={getData(55, 61)} />}
            />
            <Route
              path="food_water/*"
              element={<Page data={getData(61, 71)} />}
            />
            <Route path="shelter/*" element={<Page data={getData(71, 76)} />} />
            <Route path="medical/*" element={<Page data={getData(76, 88)} />} />
            <Route
              path="destruction/*"
              element={<Page data={getData(88, 95)} />}
            />
            <Route
              path="prevent_birth/*"
              element={<Page data={getData(95, 101)} />}
            />
          </Route>
          <Route
            path="expressions_of_genocide/*"
            element={<Page data={getData(101, 108)} />}
          />
          <Route
            path="recognition_of_genocide/*"
            element={<Page data={getData(108, 110)} />}
          />
        </Route>
        <Route path="/claims/*" element={<Page data={getData(110, 111)} />} />
        <Route path="/relief/*" element={<Page data={getData(111, 112)} />} />
        <Route path="/request/*" element={<Request />}>
          <Route
            path="compelling/*"
            element={<Page data={getData(117, 120)} />}
          />
          <Route
            path="prima_facie/*"
            element={<Page data={getData(120, 129)} />}
          />
          <Route path="rights/*" element={<Page data={getData(129, 136)} />} />
          <Route path="risk/*" element={<Page data={getData(136, 144)} />} />
          <Route
            path="provisional/*"
            element={<Page data={getData(144, 148)} />}
          />
        </Route>
        <Route
          path="reservation/*"
          element={<Page data={getData(148, 149)} />}
        />
        <Route
          path="appointment/*"
          element={<Page data={getData(149, 153)} />}
        />
        <Route path="search/*" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

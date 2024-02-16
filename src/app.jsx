import { useState, useEffect } from "preact/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./app.css";
import parse from "html-react-parser";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Claims from "./components/Claims";
import Facts from "./components/Facts";
import Intro from "./components/Intro";
import Relief from "./components/Relief";
import Request from "./components/Request";
import Jurisdiction from "./components/Jurisdiction";
import Reservation from "./components/Reservation";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import FactIntro from "./components/FactIntro";
import FactBackground from "./components/FactBackground";
import FactGenocidalActs from "./components/FactGenocidalActs";
import FactExpressionsOfGenocide from "./components/FactExpressionsOfGenocide";
import FactRecognitionOfGenocide from "./components/FactRecognitionOfGenocide";
import data from "./data";
export function App() {
  const obj = {
    text: "this is a <strong>large piece of text</strong>",
  };
  return (
    <div class="container">
      <h1>ICJ</h1>
      <p>{parse(obj.text)}</p>
      {/* {content.slice(0, 3).map((section) => (
        <Card>{section.content}</Card>
      ))} */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/facts">The facts</Link>
          <ul>
            <li>
              <Link to="/facts/introduction">Introduction</Link>
            </li>
            <li>
              <Link to="/facts/background">Background</Link>
            </li>
            <li>
              <Link to="/facts/genocidal_acts">Genocidal acts</Link>
            </li>
            <li>
              <Link to="/facts/expressions_of_genocide">
                Expressions of Genocidal Intent against the Palestinian People
                by Israeli State Officials and Others
              </Link>
            </li>
            <li>
              <Link to="/facts/recognition_of_genocide">
                Recognition of Israel’s genocidal intent against Palestinians
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/claims">The claims of South Africa</Link>
        </li>
        <li>
          <Link to="/relief">The relief sought</Link>
        </li>
        <li>
          <Link to="/request">Request for provisional measures</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation of rights</Link>
        </li>
        <li>
          <Link to="/appointment">Appointment of agent</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction/*" element={<Intro />} />
        <Route path="/jurisdiction" element={<Jurisdiction />} />
        <Route path="/facts/*" element={<Facts />}>
          <Route path="introduction/*" element={<FactIntro />} />
          <Route path="background" element={<FactBackground />} />
          <Route path="genocidal_acts" element={<FactGenocidalActs />} />
          <Route
            path="expressions_of_genocide"
            element={<FactExpressionsOfGenocide />}
          />
          <Route
            path="recognition_of_genocide"
            element={<FactRecognitionOfGenocide />}
          />
        </Route>
        <Route path="/claims" element={<Claims />} />
        <Route path="/relief" element={<Relief />} />
        <Route path="/request/*" element={<Request />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/introduction" element={<Intro />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

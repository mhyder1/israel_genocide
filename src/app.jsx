import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Facts from "./components/Facts";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import FactBackground from "./components/FactBackground";
import FactGenocidalActs from "./components/FactGenocidalActs";
import Request from "./components/Request";
import Page from "./components/Page";
import NavBar from "./components/NavBar";
import Nav from "./components/Nav";
import { getData } from "./utils/getData";

export function App() {
  return (
    <div class="container">
      {/* <h1>ICJ</h1> */}
      {/* <NavBar /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction/*" element={<Page data={getData(1, 8)} />} />
        <Route
          path="/jurisdiction/*"
          element={<Page data={getData(9, 18)} />}
        />
        <Route path="/facts/*" element={<Facts />}>
          <Route
            path="introduction/*"
            element={<Page data={getData(18, 21)} />}
          />
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

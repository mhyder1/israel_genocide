import { Outlet, useMatch } from "react-router-dom";
import Page from "./Page";
import { getData } from "../utils/getData";
export default function FactGenocidalActs() {
  const match = useMatch("facts/genocidal_acts/*");
  const isMatch = match.params["*"];
  const urlMatch = /^\d{2}$/.test(isMatch);
  return (
    <>
      <h1>The facts / genocidal acts</h1>
      {!isMatch || urlMatch ? <Page data={getData(43, 45)} /> : <Outlet />}
    </>
  );
}

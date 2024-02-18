import { Outlet, useMatch } from "react-router-dom";
import Page from "./Page";
import { getData } from "../utils/getData";
export default function Request() {
  const match = useMatch("request/*");
  console.log(match);
  const isMatch = match.params["*"];
  const urlMatch = /^\d{3}$/.test(isMatch);
  return (
    <>
      <h1>Request for provisional measures</h1>
      {!isMatch || urlMatch ? <Page data={getData(112, 117)} /> : <Outlet />}
    </>
  );
}

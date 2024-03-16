import { Outlet, useMatch, useNavigate } from "react-router-dom";
import Page from "./Page";
import { getData } from "../utils/getData";
import { useEffect } from "react";
export default function Facts() {
  const match = useMatch("facts/*");
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (match.pathname === "/facts") {
  //     navigate("/facts/introduction");
  //   }
  // }, [match]);
  const isFacts = match.pathname === "/facts";

  return isFacts ? <Page data={getData(18, 21)} /> : <Outlet />;
}

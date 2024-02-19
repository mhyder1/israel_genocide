import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Facts() {
  const match = useMatch("facts/*");
  const navigate = useNavigate();
  useEffect(() => {
    if (match.pathname === "/facts") {
      navigate("/facts/introduction");
    }
  }, [match]);

  return <Outlet />;
}

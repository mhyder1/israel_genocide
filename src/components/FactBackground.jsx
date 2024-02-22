import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function FactBackground() {
  const match = useMatch("facts/background/*");
  const navigate = useNavigate();
  useEffect(() => {
    if (match.pathname === "/facts/background") {
      navigate("/facts/background/gaza");
    }
  }, [match]);
  return (
    <>
      <Outlet />
    </>
  );
}

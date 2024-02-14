import { useState, useLayoutEffect } from "preact/hooks";
import { Link, Routes, Route, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
import Card from "./Card";
import data from "../data";

export default function Intro() {
  const params = useParams();
  const [initialActiveLink] = Object.values(params);
  const pages = data.slice(1, 8);
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  useLayoutEffect(() => {
    setActiveLink(initialActiveLink);
  }, [initialActiveLink]);

  return (
    <>
      <h1>Introduction</h1>
      <Navigation pages={pages} />
      <LocalRoutes pages={pages} />
    </>
  );
}

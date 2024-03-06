import { Link, useHref } from "react-router-dom";
export default function Crumbs() {
  const linkMap = {
    "/facts": "The facts",
    "/introduction": "Introduction",
    "/jurisdiction": "Jurisdiction of the court",
    "/facts/background": "Background",
    "/facts/background/gaza": "The Gaza Strip",
    "/facts/background/west_bank": "The West Bank (including East Jerusalem)",
    "/facts/background/october_7": "The attacks in Israel of 7 October 2023",
    "/facts/genocidal_acts":
      "Genocidal Acts Committed against the Palestinian People",
    "/facts/genocidal_acts/killing": "Killing Palestinians in Gaza",
    "/facts/genocidal_acts/body_mental":
      "Causing Serious Bodily and Mental Harm to Palestinians in Gaza",
    "/facts/genocidal_acts/expulsion":
      "Mass expulsion from homes and displacement of Palestinians in Gaza",
    "/facts/genocidal_acts/food_water":
      "Deprivation of access to adequate shelter, clothes, hygiene and sanitation to Palestinians in Gaza",
    "/facts/genocidal_acts/medical":
      "Deprivation of adequate medical assistance to Palestinians in Gaza",
    "/facts/genocidal_acts/destruction":
      "Destruction of Palestinian life in Gaza",
    "/facts/genocidal_acts/prevent_birth":
      "Imposing measures intended to prevent Palestinian births",
    "/facts/expressions_of_genocide":
      "Expressions of Genocidal Intent against the Palestinian People by Israeli State Officials and Others",
  };
  const href = useHref();
  const crumbs = href
    .replace(/\/\d*$/, "")
    .split("/")
    .filter(Boolean)
    .map((_, index, href) => `/${href.slice(0, index + 1).join("/")}`);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {crumbs.map((crumb, index) => (
            <li class="breadcrumb-item" style={{ color: "white" }}>
              {index < crumbs.length - 1 ? (
                <Link to={crumb}>{linkMap[crumb]}</Link>
              ) : (
                <span>{linkMap[crumb]}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

{
  /* <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Library
    </li>
  </ol>
</nav>; */
}

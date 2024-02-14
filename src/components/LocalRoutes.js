import { Routes, Route } from "react-router-dom";
import Card from "./Card";

export default function LocalRoutes({ pages }) {
  const createRoutes = (pages) => {
    return pages.map(({ page }) => (
      <Route
        key={page}
        path={`/${page}`}
        element={<Card data={pages[page - 1]} />}
      />
    ));
  };

  const localRoutes = createRoutes(pages);

  return (
    <Routes>
      <Route index element={<Card data={pages[0]} />} />
      {localRoutes}
    </Routes>
  );
}

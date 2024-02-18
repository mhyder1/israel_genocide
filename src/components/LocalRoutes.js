import { Routes, Route } from "react-router-dom";
import Card from "./Card";

export default function LocalRoutes({ pages, searchWord }) {
  const createRoutes = (pages) => {
    return pages.map(({ page }, index) => (
      <Route
        key={page}
        path={`/${page}`}
        element={<Card data={pages[index]} searchWord={searchWord} />}
      />
    ));
  };

  const localRoutes = createRoutes(pages);

  return (
    <Routes>
      <Route index element={<Card data={pages[0]} searchWord={searchWord} />} />
      {localRoutes}
    </Routes>
  );
}

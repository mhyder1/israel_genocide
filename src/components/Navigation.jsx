import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
export default function Navigation({ pages }) {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <ul class="pagination" style="display:flex; flex-wrap: wrap">
        {pages.map(({ page }) => (
          <li
            class={`page-item ${activeLink === page ? "active" : ""}`}
            onClick={() => setActiveLink(page)}
          >
            <Link class="page-link" to={`${page}`}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import { Link } from "react-router-dom";
export default function Navigation({ pages }) {
  return (
    <>
      <ul class="pagination">
        {pages.map(({ page }) => (
          <li
            class="page-item"
            //   class={`page-item ${activeLink === page ? "active" : ""}`}
            //   onClick={() => setActiveLink(page)}
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

import { Link } from "react-router-dom";

import usePagination from "@mui/material/usePagination";
export default function Navigation({ pages }) {

  const { items } = usePagination({
    count: pages.length, 
  });

  return (
    // <section>
    //   <ul class="pagination" style="display:flex; flex-wrap: wrap">
    //     {pages.map(({ page }) => (
    //       <li
    //         class={`page-item ${activeLink === page ? "active" : ""}`}
    //         onClick={() => setActiveLink(page)}
    //       >
    //         <Link class="page-link" to={`${page}`}>
    //           {page}
    //         </Link>
    //       </li>
    //     ))}
    //           {/* <span>Next {">>"} </span> */}
    //   </ul>
    // </section>

    <section>
      <ul class="pagination" style="display:flex">
        {items.map(({ page, type, selected, ...item }, index) => {
          const currentPage = pages?.[page-1]?.page
          let children = null;
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
            // children = ". . ."
            // children = '⚫⚫⚫'
            children = <span style={{fontSize: "50px", position: "relative", bottom: "36px"}}>. . . </span>
          } else if (type === "page") {
            children = (
              <li
                className={`page-item ${selected ? "active" : ""}`}
                {...item}
              >
                <Link class="page-link" to={`${currentPage}`}>
                  {currentPage}
                </Link>
              </li>
            );
          } else {
            children = (
              <button type="button" className="btn btn-sm btn-light" {...item}>
                <Link  to={`${currentPage}`} >
                  {type}
                </Link>
              </button>
            );
          }

          return !!pages.length && <li key={index}>{children}</li>;
        })}
      </ul>
      {/* <span>next {'>>'}</span> */}

    </section>
  );
}

import data from "../data";
import Navigation from "./Navigation";
import LocalRoutes from "./LocalRoutes";
export default function Relief() {
  // page 111
  // console.log();
  // possibly use a list group
  // display headings
  const pages = data.slice(111, 112);
  console.log(pages);
  return (
    <>
      <h1>The relief sough</h1>
      {/* {pages.map((item) => (
        <>
          <p>{item.page}</p>
          <p>{item.content}</p>
          {item.subtext.map((sub) => (
            <>
              <p class="lead">{sub.section}</p>
              {sub.content && (
                <ul>
                  {sub.content.map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </>
      ))} */}
    </>
  );
}
/**
 * subtext[]
 *  page
 *  content []
 */

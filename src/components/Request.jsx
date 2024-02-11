import data from "../data";
import Card from "./Card";
export default function Request() {
  // console.log(data.slice(113, 118));
  const pages = data.slice(113, 118);
  return (
    <>
      <h1>Request for provisional measures</h1>
      {pages.map((item) => (
        <>
          <Card data={item} />
          {item.subtext && (
            <ul class="list-group">
              {item.subtext.map((text) => (
                <li class="list-group-item">{text}</li>
              ))}
            </ul>
          )}
        </>
      ))}
    </>
  );
}

/**
 *           
         {item.subtext && item.subtext.map((text) => (
            <div class="list-group">
              <p>{text}</p>
            </div>
          
          ))}
 */

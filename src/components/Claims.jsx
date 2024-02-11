import data from "../data";
export default function Claims() {
  const pages = data.slice(111, 112);
  return (
    <>
      <h1>The claims of South Africa</h1>
      {pages.map((item) => (
        <>
          <div class="card">
            <div class="card-body">
              <p>{item.page}</p>
              <p>{item.content}</p>
            </div>
          </div>
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

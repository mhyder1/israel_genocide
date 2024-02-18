import parse from "html-react-parser";
export default function Card({ data }) {
  return (
    <div class="card">
      {Object.keys(data).length && (
        <div class="card-body">
          <p>{data.page}</p>
          <p>{data.content}</p>
          {data.subtext && (
            <ul class="list-group">
              {data.subtext.map((text) =>
                typeof text === "string" ? (
                  <li class="list-group-item">{parse(text)}</li>
                ) : (
                  <>
                    {text.title && <h3>{text.title}</h3>}
                    {text.content && (
                      <ul class="title-group">
                        {text.content.map((txt) => (
                          <li class="list-group-item">{txt}</li>
                        ))}
                      </ul>
                    )}
                    {text.subtext && (
                      <ul class="title-group">
                        {text.subtext.map((item) => (
                          <li class="list-group-item">{item.content}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

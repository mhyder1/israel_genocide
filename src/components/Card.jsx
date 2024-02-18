import parse from "html-react-parser";
import Highlighter from "react-highlight-words";
export default function Card({ data, searchWord }) {
  const TextDispaly = ({ content }) => (
    <Highlighter searchWords={[searchWord]} textToHighlight={content} />
  );
  return (
    <div class="card">
      {data?.content && (
        <div class="card-body">
          <p>{data.page}</p>
          <p>
            <TextDispaly content={data.content} />
          </p>
          {data.subtext && (
            <ul class="list-group">
              {data.subtext.map((text) =>
                typeof text === "string" ? (
                  <li class="list-group-item">
                    <TextDispaly content={parse(text)} />
                  </li>
                ) : (
                  <>
                    {text.title && <h3>{text.title}</h3>}
                    {text.content && (
                      <ul class="title-group">
                        {text.content.map((txt) => (
                          <li class="list-group-item">
                            <TextDispaly content={txt} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {text.subtext && (
                      <ul class="title-group">
                        {text.subtext.map((item) => (
                          <li class="list-group-item">
                            <TextDispaly content={item.content} />
                          </li>
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

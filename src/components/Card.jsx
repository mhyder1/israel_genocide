import parse from "html-react-parser";
import Highlighter from "react-highlight-words";
import renderToString from "preact-render-to-string";
import { useMatch } from "react-router-dom";
import TopNav from "./TopNav";
export default function Card({ data, searchWord }) {
  const match = useMatch("search/*");
  const showMenu = match?.pathname !== "/search"
  const HighlightedText = ({ text, wordsToHighlight }) => {
    //find html tags and their contents
    const parts = text.split(/(<[^>]+>[^<]*<\/[^>]+>|<[^>]+>|[^<]+)/g);
    return (
      <span>
        {parts.map((part, index) =>
          part.startsWith("<") ? (
            parse(part)
          ) : (
            <Highlighter
              key={index}
              searchWords={wordsToHighlight}
              autoEscape={true}
              textToHighlight={part}
            />
          )
        )}
      </span>
    );
  };
  const TextDisplay = ({ content }) => {
    const jsx = parse(content);
    const plainText = renderToString(jsx);
    return <HighlightedText text={plainText} wordsToHighlight={[searchWord]} />;
  };
  return (
    <>
      {showMenu && <TopNav />}
      <div class="card page-card">
        {data?.content ? (
          <div class="card-body">
            <p>{data.page}</p>
            <p>
              <TextDisplay content={data.content} />
            </p>
            {data.subtext && (
              <ul class="list-group">
                {data.subtext.map((text) =>
                  typeof text === "string" ? (
                    <li class="list-group-item">
                      <TextDisplay content={text} />{" "}
                    </li>
                  ) : (
                    <>
                      {text.title && <h3>{text.title}</h3>}
                      {text.content && (
                        <ul class="title-group">
                          {text.content.map((txt) => (
                            <li class="list-group-item">
                              <TextDisplay content={txt} />
                            </li>
                          ))}
                        </ul>
                      )}
                      {text.subtext && (
                        <ul class="title-group">
                          {text.subtext.map((item) => (
                            <li class="list-group-item">
                              <TextDisplay content={item.content} />
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
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            Search for a term in the ICJ document
          </p>
        )}
      </div>
    </>
  );
}

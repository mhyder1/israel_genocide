import parse from "html-react-parser";
import Highlighter from "react-highlight-words";
import TopNav from "./TopNav";
export default function Card({ data, searchWord }) {
  const TextDisplay = ({ content }) => (
    <Highlighter searchWords={[searchWord]} textToHighlight={content} />
  );
  return (
    <>
      {/* <TopNav /> */}
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
                      {/** parse needs to be fixed, doesnt work with hilight */}
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
        ) : (<p style={{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100%'}}>Search for a term in the ICJ document</p>)}
      </div>
    </>
  );
}

import parse from "html-react-parser";
import Highlighter from "react-highlight-words";
import renderToString from "preact-render-to-string";
import { references } from "../../references";
import { useMatch } from "react-router-dom";
import TopNav from "./TopNav";
export default function Card({ data, searchWord }) {
  const match = useMatch("search/*");
  const showMenu = match?.pathnameBase !== "/search";
  console.log(match);
  console.log;
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

  // const HighlightedText = ({ text, wordsToHighlight }) => {
  //   // Split the text into parts while preserving HTML tags
  //   const parts = text.split(/(<[^>]+>[^<]*<\/[^>]+>|<[^>]+>|[^<]+)/g);
  //   return (
  //     <span>
  //       {parts.map((part, index) => {
  //         if (part.startsWith('<')) {
  //           // Render HTML tags
  //           console.log(part)
  //           return <span dangerouslySetInnerHTML={{ __html: part }} />;
  //         } else {
  //           // Split text content by highlighting words
  //           return part
  //             .split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'))
  //             .map((wordPart, i) => {
  //               const word = wordsToHighlight.find(
  //                 w => wordPart.toLowerCase() === w.toLowerCase()
  //               );
  //               if (word) {
  //                 // Highlight matched words
  //                 if (wordPart.toLowerCase() === 'html') {
  //                   return (
  //                     <strong key={i} style={{ backgroundColor: 'yellow' }}>
  //                       {wordPart}
  //                     </strong>
  //                   );
  //                 } else if (wordPart.toLowerCase() === 'text') {
  //                   return (
  //                     <em key={i} style={{ backgroundColor: 'yellow' }}>
  //                       {wordPart}
  //                     </em>
  //                   );
  //                 } else {
  //                   return (
  //                     <span key={i} style={{ backgroundColor: 'yellow' }}>
  //                       {wordPart}
  //                     </span>
  //                   );
  //                 }
  //               } else {
  //                 return <span key={i}>{wordPart}</span>;
  //               }
  //             });
  //         }
  //       })}
  //     </span>
  //   );
  // };
  function convertToHyperlinks(text) {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Replace URLs with <a> tags
    return text.replace(urlRegex, (url) => {
      if(url.endsWith('.') || url.endsWith(';')) {
        url = url.slice(0, -1);
      }
      return '<a href="' + url + '" target="_blank">' + url + "</a>";
    });
  }

  function replacer(match, number) {
    console.log(number);
    if (number in references) {
      const tooltip = convertToHyperlinks(references[number]);
      return `<sup class="reference">${number}<span class="hidden">${tooltip}</span></sup>`; // <span class="hidden">${references[number]}</span>
      // return "<sup><span>hello</span></sup>"
    }
    // console.log(match)
    return match;
  }

  const TextDisplay = ({ content }) => {
    // add references
    // content starts as plain text. we can do a replace with the plain text
    // find sup tag, get number, match number with object, replace in document
    // console.log(content)
    const pattern = /<sup>(\d+)<\/sup>/g;
    const newContent = content.replace(pattern, replacer);
    // console.log(newContent)
    //-------------------------------------
    const jsx = parse(newContent);
    // const jsx = parse(content);
    return jsx;
    // const plainText = renderToString(jsx);
    // return <HighlightedText text={plainText} wordsToHighlight={[searchWord]} />;

    //   return <Highlighter
    //   searchWords={[searchWord]}
    //   textToHighlight={content}
    // />
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

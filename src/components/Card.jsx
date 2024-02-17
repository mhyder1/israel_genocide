export default function Card({ data }) {
  return (
    <div class="card">
      <div class="card-body">
        <p>{data.page}</p>
        <p>{data.content}</p>
        {data.subtext && (
          <ul class="list-group">
            {data.subtext.map((text) =>
              typeof text === "string" ? (
                <li class="list-group-item">{text}</li>
              ) : (
                <>
                  <h3>{text.title}</h3>
                  <ul class="title-group">
                    {text.content.map((txt) => (
                      <li class="list-group-item">{txt}</li>
                    ))}
                  </ul>
                </>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

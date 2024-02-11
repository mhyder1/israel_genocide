export default function Card({ data }) {
  //   console.log({ page, content });
  return (
    <div class="card">
      <div class="card-body">
        <p>{data.page}</p>
        <p>{data.content}</p>
        {data.subtext && (
          <ul class="list-group">
            {data.subtext.map((text) => (
              <li class="list-group-item">{text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Card({ data }) {
  //   console.log({ page, content });
  return (
    <div class="card">
      <div class="card-body">
        <p>{data.page}</p>
        <p>{data.content}</p>
      </div>
    </div>
  );
}

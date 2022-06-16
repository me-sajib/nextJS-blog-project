import Meta from "./components/Meta";
import Link from "next/link";
export default function Home({ data }) {
  return (
    <div className="container">
      <Meta
        title="News - Home"
        keyword="update news, hot news"
        description="update on this time news"
      />
      <div className="row row-cols-4 row-cols-md-3 g-3">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              <Link href="/blog/[id]" as={`/blog/${item.id}`}>
                <a className="btn btn-primary">Details</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { data },
  };
}

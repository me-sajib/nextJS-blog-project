import Meta from "./components/Meta";
import Image from "next/image";
export default function Home({ articles }) {
  return (
    <div className="container">
      <Meta
        title="News - Home"
        keyword="update news, hot news"
        description="update on this time news"
      />
      <h1>Lasted News</h1>
      <div className="row row-cols-3 row-cols-md-2 g-4">
        {articles.map((article) => (
          <div className="col" key={article.title}>
            <div className="card">
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-05-16&sortBy=publishedAt&apiKey=1ea5bbdc13d244c9a6bdb7105967d566"
  );
  const data = await res.json();
  return {
    props: { articles: data.articles.slice(0, 20) },
  };
}

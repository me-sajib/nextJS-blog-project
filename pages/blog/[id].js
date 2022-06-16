import React from "react";

const Details = ({ data }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-1 w-50 items-center">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Details;

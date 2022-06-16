import Head from "next/head";
const Meta = ({ title, keyword, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />

      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "News Room",
  keyword: "English news, best news, today news, update news",
  description: "Be updated news any country and any time",
};
export default Meta;

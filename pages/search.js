import Head from "next/head";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import Navbar from "../components/Navbar";
import axios from "axios";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search</title>
      </Head>
      <Navbar />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  console.log(context.query.term);

  const data = await axios({
    method: "GET",
    url: "https://duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com/",
    params: {
      q: `${context.query.term}`,
      no_html: "1",
      no_redirect: "1",
      skip_disambig: "1",
      format: "json",
    },
    headers: {
      "x-rapidapi-host": "duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com",
      "x-rapidapi-key": "3d02516dc4mshac7d3f07163c353p1c0becjsnd15c5f044006",
    },
  }).then(function (response) {
    // console.log(response.data);
    return response.data;
  });

  // const data = useDummyData
  //   ? Response
  //   : await fetch(
  //       `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  //     ).then((response) => response.json());

  //After the server has rendered pass the results to the client
  return {
    props: {
      results: data,
    },
  };
}

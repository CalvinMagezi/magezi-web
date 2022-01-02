import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-gray-600 text-md">
        About: <span className="font-bold">{results.Heading}</span> <br />{" "}
        Related Topics ({results.RelatedTopics?.length})
      </p>

      {results.RelatedTopics?.map((result) => (
        <div key={result.FirstURL} className="max-w-xl mb-8">
          <div className="group">
            <a
              href={result.FirstURL}
              className="text-sm text-blue-800 group-hover:underline"
            >
              {result.FirstURL}
            </a>
            <br />
          </div>

          <p className="line-clamp-2">{result.Text}</p>
        </div>
      ))}
      {/* <PaginationButtons /> */}
    </div>
  );
}

export default SearchResults;

import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  const { searchInput } = useParams();

  const searchResults = [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more results as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">
        Search Results for "
        <span className="text-2xl text-green-600">{searchInput}</span>"
      </h2>
      <p className="text-gray-600 mb-8">Found {searchResults.length} results</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((result) => (
          <div key={result.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
            <p className="text-gray-600 mb-4">{result.author}</p>
            <p className="text-gray-700">{result.description}</p>
            <div className="mt-4">
              <button className="btn text-white bg-green-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;

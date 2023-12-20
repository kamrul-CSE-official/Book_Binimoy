import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";
import Loading from "../../Components/Share/Loading";

const SearchResultPage = () => {
  const { data, isLoading, error, setSearchText } = useContext(DataContext);
  const { searchInput } = useParams();
  const [isSeeAll, setIsSeeAll] = useState(12);

  setSearchText(searchInput);
  console.log("Search page: ", data.docs);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">
        Search Results for "
        <span className="text-2xl text-green-600">{searchInput}</span>"
      </h2>
      <p className="text-gray-600 mb-8">Found {data?.docs?.length}+ results</p>
      {!isLoading && error == null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.docs?.slice(0, isSeeAll).map((result) => (
            <div key={result.key} className="bg-white p-6 rounded-lg shadow-md">
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
      ) : (
        <Loading />
      )}
      {isSeeAll < 15 && (
        <div className="flex items-center justify-center my-5">
          <button
            onClick={() => setIsSeeAll(100)}
            className="btn bg-green-700 text-white mx-auto"
          >
            See All...
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;

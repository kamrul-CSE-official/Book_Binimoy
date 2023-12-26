import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";
import Loading from "../../Components/Share/Loading";
import Card from "../../Components/Share/Card/Card";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.docs?.slice(0, isSeeAll).map((result) => (
            <Card key={result.key} result={result} />
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

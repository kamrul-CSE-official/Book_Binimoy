import { useContext } from "react";
import { DataContext } from "../../Providers/DataProvider";
import Loading from "../../Components/Share/Loading";
import Card from "../../Components/Share/Card/Card";

const FeaturedBooksSection = () => {
  const { data, isLoading, error } = useContext(DataContext);

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Books
        </h2>

        {!isLoading && error == null ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center text-center mx-auto">
            {data?.docs?.slice(81, 93).map((result) => (
              <Card key={result.key} result={result} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default FeaturedBooksSection;

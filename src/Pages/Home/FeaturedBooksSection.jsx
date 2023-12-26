import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";
import imgNotFound from "../../assets/bookImgNotFound.png";
import Loading from "../../Components/Share/Loading";
import { FcLikePlaceholder } from "react-icons/fc";

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
              <div
                key={result?.key}
                className="relative w-full overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl"
              >
                <div className="mx-auto flex items-center justify-center">
                  {result?.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${result?.cover_i}-L.jpg`}
                      alt={result.title}
                      width="200"
                      className="h-60 rounded-t-lg object-cover mx-auto"
                    />
                  ) : (
                    <img
                      src={imgNotFound}
                      alt={result.title.slice(0, 10)}
                      width="200"
                      className="h-60 rounded-t-lg object-cover"
                    />
                  )}
                </div>
                <span className="absolute top-0 right-0 p-3">
                  <FcLikePlaceholder size={30} />
                </span>
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                  15% off
                </span>
                <div className="mt-4 px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                    {result.title.slice(0, 20)}
                  </h5>

                  <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      5.0
                    </span>
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ৳249
                      </span>
                      <span className="text-sm text-slate-900 line-through">
                        ৳299
                      </span>
                    </p>
                    <Link
                      to="/"
                      className="btn flex items-center rounded-md px-5 py-2.5 text-center bg-green-600 hover:bg-green-500 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
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

import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SearchModal({ isModalOpen, setModalOpen }) {
  const [searchInput, setSearchInput] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = () => {
    closeModal();
    setSearchInput("");
  };

  return (
    <div className="relative">
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FcSearch size={30} />
                  </div>
                  <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Search Your Required Book
                    </h3>
                    <div className="w-full my-10 flex items-center justify-center gap-2">
                      <input
                        type="text"
                        placeholder="Search here"
                        className="input input-bordered input-primary w-full"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                      <Link to={`/search/${searchInput}`}>
                        <button
                          onClick={() => handleSearch()}
                          className="btn text-white bg-green-600"
                        >
                          Search
                        </button>
                      </Link>
                    </div>{" "}
                    <p>
                      You search:{" "}
                      <span className="text-green-600">{searchInput}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse absolute top-0 right-0">
                <button
                  onClick={closeModal}
                  className="btn btn-circle bg-red-600 hover:bg-red-800 text-white"
                >
                  <IoCloseSharp size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

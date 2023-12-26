import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaMoneyBillAlt,
  FaGift,
  FaBookReader,
} from "react-icons/fa";

export default function Category() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Buy Books */}
          <Link to="/buy" className="hover:shadow-lg duration-200">
            <div className="bg-white p-4 rounded-md shadow-md">
              <FaShoppingCart className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Buy Books</h3>
              <p className="text-gray-600">
                Find your next favorite book to purchase.
              </p>
            </div>
          </Link>

          {/* Sell Books */}
          <Link to="/sell" className="hover:shadow-lg duration-200">
            <div className="bg-white p-4 rounded-md shadow-md">
              <FaMoneyBillAlt className="text-4xl text-green-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Sell Books</h3>
              <p className="text-gray-600">
                List your books for sale and connect with buyers.
              </p>
            </div>
          </Link>

          {/* Donate Books */}
          <Link to="/donateBook" className="hover:shadow-lg duration-200">
            <div className="bg-white p-4 rounded-md shadow-md">
              <FaGift className="text-4xl text-red-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Donate Books</h3>
              <p className="text-gray-600">
                Contribute to spreading knowledge by donating books.
              </p>
            </div>
          </Link>

          {/* Rent Books */}
          <Link to="/rent" className="hover:shadow-lg duration-200">
            <div className="bg-white p-4 rounded-md shadow-md">
              <FaBookReader className="text-4xl text-purple-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Rent Books</h3>
              <p className="text-gray-600">
                Explore renting options for your desired books.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

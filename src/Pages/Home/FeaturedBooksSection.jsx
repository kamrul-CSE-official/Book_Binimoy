import { Link } from "react-router-dom";

const FeaturedBooksSection = () => {
  // Dummy data for featured books
  const featuredBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "alchemist.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "mockingbird.jpg",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "mockingbird.jpg",
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "mockingbird.jpg",
    },
    {
      id: 5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://static1.eboighar.com/thumbimages/Books/book_60452022-07-20_1658300962.jpg",
    },
  ];

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="featured-book-card"
            >
              <div className="bg-white p-4 rounded-md shadow-md">
                <img
                  src={`/images/${book.image}`}
                  alt={book.title}
                  className="w-full h-32 object-cover mb-2 rounded-md"
                />
                <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooksSection;

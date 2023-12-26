import { useState } from "react";

const DonateForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle the form submission (e.g., send data to a server)

    // For simplicity, just log the form data to the console in this example
    console.log({
      bookTitle,
      author,
      condition,
    });

    // Clear form fields
    setBookTitle("");
    setAuthor("");
    setCondition("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Donate a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="bookTitle"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Book Title
          </label>
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="condition"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Condition
          </label>
          <select
            id="condition"
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Donate Book
        </button>
      </form>
    </div>
  );
};

export default DonateForm;

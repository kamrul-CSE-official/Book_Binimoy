import React, { useState } from 'react';

export default function BookPost() {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [stock, setStock] = useState(0);
  const [publishDate, setPublishDate] = useState('');
  const [edition, setEdition] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle the form submission logic, e.g., send data to the server
    console.log('Form submitted:', {
      bookTitle,
      author,
      price,
      condition,
      stock,
      publishDate,
      edition,
      image,
      contactInfo,
    });

    // Reset the form fields
    setBookTitle('');
    setAuthor('');
    setPrice('');
    setCondition('');
    setStock(0);
    setPublishDate('');
    setEdition('');
    setImage(null);
    setContactInfo('');
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage:
          'url(https://www.cam.ac.uk/sites/www.cam.ac.uk/files/news/research/features/261017old-book-wall-credit-motilal-books.jpg)',
        backgroundSize: 'cover', // Ensures the background image covers the entire container
        opacity: 0.9, // Adjust the opacity as needed (0 to 1)
      }}
    >
      <div className="w-full md:w-1/2 mx-auto bg-white p-5 m-3 rounded-xl text-black">
        <h2 className="text-2xl font-bold mb-4">Post a Book for Sale</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="bookTitle"
              className="block text-sm font-semibold text-gray-600"
            >
              Book Title:
            </label>
            <input
              id="bookTitle"
              type="text"
              className="input input-bordered input-info w-full bg-white"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-semibold text-gray-600"
            >
              Author:
            </label>
            <input
              id="author"
              type="text"
              className="input input-bordered input-info w-full bg-white"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-semibold text-gray-600"
            >
              Price:
            </label>
            <input
              id="price"
              type="number"
              className="input input-bordered input-info w-full bg-white"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="condition"
              className="block text-sm font-semibold text-gray-600"
            >
              Condition:
            </label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="select select-primary bg-white text-black w-full"
            >
              <option disabled selected>
                মিথ্যা বলে প্রতারিত করবেন না!
              </option>
              <option>Good</option>
              <option>Better</option>
              <option>Best</option>
              <option>New</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-sm font-semibold text-gray-600"
            >
              Stock:
            </label>
            <input
              id="stock"
              type="number"
              className="input input-bordered input-info w-full bg-white"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="publishDate"
              className="block text-sm font-semibold text-gray-600"
            >
              Published Date:
            </label>
            <input
              id="publishDate"
              type="text"
              className="input input-bordered input-info w-full bg-white"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="edition"
              className="block text-sm font-semibold text-gray-600"
            >
              Edition:
            </label>
            <input
              id="edition"
              type="text"
              className="input input-bordered input-info w-full bg-white"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-600"
            >
              Book Cover Image:
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactInfo"
              className="block text-sm font-semibold text-gray-600"
            >
              Contact Information:
            </label>
            <textarea
              id="contactInfo"
              className="w-full bg-white mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

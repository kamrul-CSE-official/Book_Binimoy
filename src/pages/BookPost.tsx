import React, { useContext, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import postImg from '../assets/images/post.json';
import Loder from '@/components/Loder';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '@/Providers/AuthProvider';
interface UserData {
  img: string;
  name: string;
  email: string;
}
export default function BookPost() {
  const { user } = useContext(AuthContext)!;
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user?.email}`).then((req) => {
      setUserData({ ...user, ...req.data.data[0] });
    });
    console.log(userData);
  }, [user]);
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('Good');
  const [genre, setGenre] = useState('');
  const [stock, setStock] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [edition, setEdition] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [contactInfo, setContactInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Create a FormData object to send the form data, including the image
    const formData = new FormData();
    formData.append('bookTitle', bookTitle);
    formData.append('author', author);
    formData.append('price', price);
    formData.append('condition', condition);
    formData.append('genre', genre);
    formData.append('stock', String(stock));
    formData.append('publishDate', publishDate);
    formData.append('edition', edition);
    formData.append('contactInfo', contactInfo);

    if (image) {
      formData.append('image', image);
    }

    try {
      // Send the form data to ImageBB API
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        const imageData = await response.json();
        const imageUrl = imageData.data.url;

        const bookData = {
          name: bookTitle,
          author: author,
          img: imageUrl,
          condition: condition,
          stock: stock,
          publishDate: publishDate,
          adition: edition,
          contact: contactInfo,
          genre: genre,
          price: parseFloat(price) + (parseFloat(price) / 100) * 5,
          sellerInfo: {
            name: userData?.name,
            email: userData?.email,
            imag: userData?.img,
          },
        };
        // Now you can use imageUrl as needed (e.g., save it to your database)
        axios.post('http://localhost:5000/products', bookData).then((res) => {
          setIsLoading(false);
          if (res) {
            Swal.fire({
              title: 'Successfully Created',
              icon: 'success',
            });
          }
          console.log(res);
        });

        // Reset the form fields
        setBookTitle('');
        setAuthor('');
        setPrice('');
        setCondition('');
        setStock('');
        setPublishDate('');
        setEdition('');
        setImage(null);
        setContactInfo('');
        setGenre('');
        setIsLoading(false);
      } else {
        console.error('Failed to submit form. HTTP Status:', response.status);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="/">Go Home</a>',
        });
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="/">Go Home</a>',
      });
    }
  };

  if (parseInt(price) < 0 || parseInt(stock) < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Price and Stock never could be negative',
      footer: '<a href="/">Go Home</a>',
    });
    setPrice('');
    setStock('');
  }

  return (
    <div
      className="relative"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/premium-photo/library-books-library-books-library-shelves-bookshelf-full-bookshelf-generative-ai_438099-15531.jpg?w=1060)',
        backgroundSize: 'cover',
      }}
    >
      <div className="fixed w-1/5 top-56 md:top-14 right-5">
        <Lottie animationData={postImg} />
      </div>
      {!isLoading ? (
        <div className="w-full md:w-3/4 mx-auto bg-white p-5 m-3 rounded-xl text-black">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              আপনার পুরাতন ধুলা মাখা অব্যবহৃত বইটি হয়তো অন্য কারো বিশেষ প্রয়জন
            </h2>
            <p>
              আমাদের প্রধান উদ্দিশ্য মানুষের কাছে স্বল্প মূল্যে বই পৌছে দেয়া।
              আপনার কাছে মৃতপ্রয় বইটি অন্যনের কাছে দিয়ে নতুন জীবন দান করুন।
            </p>
          </div>
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
                htmlFor="genre"
                className="block text-sm font-semibold text-gray-600"
              >
                Genre:
              </label>
              <select
                value={genre}
                required
                onChange={(e) => setGenre(e.target.value)}
                className="select select-primary bg-white text-black w-full"
              >
                <option disabled selected>
                  আপনার বই কোন ক্যেটাগরিতে পরেছে?
                </option>
                <option value="পোগ্রামিং">পোগ্রামিং</option>
                <option value="জাতীয় শিক্ষাক্রম">জাতীয় শিক্ষাক্রম</option>
                <option value="গল্প">গল্প</option>
                <option value="উপন্যাস">উপন্যাস</option>
                <option value="কবিতা">কবিতা</option>
                <option value="ধার্মিক">ধার্মিক</option>
                <option value="খেলাধুলা">খেলাধুলা</option>
                <option value="অনান্য">অনান্য</option>
              </select>
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
                <option value="Not Good">Not Good</option>
                <option value="Normal">Normal</option>
                <option value="Good">Good</option>
                <option value="Better">Better</option>
                <option value="Best">Best</option>
                <option value="New">New</option>
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
                onChange={(e) => setStock(e.target.value)}
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
                Comment (Why you sell this book):
              </label>
              <textarea
                id="contactInfo"
                className="input input-bordered input-info w-full bg-white"
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
      ) : (
        <div className="w-full md:w-3/4 mx-auto bg-white p-5 m-3 rounded-xl text-black">
          <h1 className="text-3xl font-bold">Uploding Data.....</h1>
          <Loder />
        </div>
      )}
    </div>
  );
}

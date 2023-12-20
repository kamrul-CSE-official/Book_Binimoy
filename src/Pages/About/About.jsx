// src/pages/About.js
import { FaMailBulk, FaTrophy, FaHeart } from "react-icons/fa";

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="flex flex-col items-center mb-6">
    <img
      src={imageSrc}
      alt={`Team Member ${name}`}
      className="w-24 h-24 rounded-full mb-2"
    />
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          About Us
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Welcome to our About Us page. We are a passionate team dedicated to
          creating amazing products and providing excellent services.
        </p>
        <p className="text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-700 mb-8 text-center">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Mission and Vision */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Mission and Vision</h2>
          <p className="text-gray-700">
            Our mission is to empower individuals and businesses through
            innovative solutions. We envision a world where technology enriches
            lives and fosters positive change.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member cards */}
          <TeamMember
            name="Sangeeta Das"
            role="Web Developer"
            imageSrc="https://placekitten.com/200/200"
          />
          {/* Add more team members as needed */}
        </div>

        {/* Core Values */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Customer First</li>
            <li>Innovation and Creativity</li>
            <li>Integrity and Transparency</li>
            <li>Continuous Learning</li>
            <li>Collaboration and Teamwork</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
          <div className="flex items-center space-x-4">
            <FaTrophy className="text-blue-500" size={24} />
            <p className="text-gray-700">Winner of the Innovation Award 2022</p>
          </div>
          {/* Add more achievements as needed */}
        </div>

        {/* Why Choose Us */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <div className="flex items-center space-x-4">
            <FaHeart className="text-red-500" size={24} />
            <p className="text-gray-700">
              Passionate about delivering exceptional value to our clients.
            </p>
          </div>
          {/* Add more reasons as needed */}
        </div>

        {/* Additional Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Additional Content
          </h2>
          <p className="text-gray-700 text-center">
            We are committed to continuous improvement and strive for excellence
            in everything we do. Our dedication to quality and customer
            satisfaction sets us apart.
          </p>
          {/* Add more content as needed */}
        </div>

        {/* Contact section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center space-x-4">
            <FaMailBulk className="text-blue-500" size={24} />
            <p className="text-gray-700">
              Have questions or want to get in touch? Email us at{" "}
              <a
                href="mailto:info@example.com"
                className="text-blue-500 hover:underline"
              >
                info@example.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

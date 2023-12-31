import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios

export default function Profile() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [orderHistory, setOrderHistory] = useState<any[]>([]);
  const [salesInfo, setSalesInfo] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching user data from the server
    // In a real application, you would make an API call to retrieve
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/user'); // Replace with your API endpoint
        const orderResponse = await axios.get('/api/orders'); // Replace with your API endpoint
        const salesResponse = await axios.get('/api/sales'); // Replace with your API endpoint

        setUserInfo(userResponse.data);
        setOrderHistory(orderResponse.data);
        setSalesInfo(salesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Username: {userInfo.username}</p>
            <p className="text-gray-600">Email: {userInfo.email}</p>
          </div>
          {/* Add more user information fields as needed */}
        </div>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <ul>
          {orderHistory.map((order) => (
            <li key={order.id} className="text-gray-600">
              Order #{order.id} - Total: ${order.total}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Sales Information</h2>
        <ul>
          {salesInfo.map((sale) => (
            <li key={sale.id} className="text-gray-600">
              Sale #{sale.id} - Amount: ${sale.amount}
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Edit Profile
      </button>
    </div>
  );
}

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '@/Providers/AuthProvider';

interface UserData {
  img: string;
}
export default function Profile() {
  const { user, logOut, setUser, loading } = useContext(AuthContext)!;
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user?.email}`).then((req) => {
      setUserInfo({ ...user, ...req.data.data[0] });
    });
    console.log(userInfo);
  }, [user]);
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
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userInfo?.img} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Username: {userInfo?.name}</p>
            <p className="text-gray-600">Email: {userInfo?.email}</p>
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
    </div>
  );
}

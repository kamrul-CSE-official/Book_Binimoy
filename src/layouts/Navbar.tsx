import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import Cart from '../components/Cart';
import logo from '../assets/images/logo.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/Providers/AuthProvider';
import axios from 'axios';

interface UserData {
  img: string;
}

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext)!;
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user?.email}`).then((req) => {
      setUserData({ ...user, ...req.data.data[0] });
    });
    console.log('Marg: ', userData);
  }, [user]);

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <Link to="/">
            <img className="h-16 w-32" src={logo} alt="log" />
          </Link>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">Products</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              {!user ? (
                <li>
                  <Link to="/login">
                    <button className="btn text-xl font-bold">Login</button>
                  </Link>
                </li>
              ) : (
                <li className="ml-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <Avatar>
                        <AvatarImage src={userData?.img} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link to="/profile">
                        <DropdownMenuItem className="cursor-pointer">
                          Profile
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="cursor-pointer">
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Team
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => logOut()}
                        className="cursor-pointer text-red-500 font-bold"
                      >
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

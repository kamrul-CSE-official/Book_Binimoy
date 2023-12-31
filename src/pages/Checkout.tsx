import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useAppSelector } from '@/redux/hooks';
import Confetti from 'react-confetti';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Checkout() {
  const { products, total } = useAppSelector((state) => state.cart);
  const [scheduled, setScheduled] = useState<boolean>(false);
  const [enjoy, setEnjoy] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    note: '',
    payment: 'Online',
  });

  const handleCheckout = () => {
    const checkOutInfo = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerCity: formData.city,
      customerNode: formData.note,
      customerAddress: formData.address,
      bookInfo: products,
    };
    console.log(checkOutInfo);
    axios.post('http://localhost:5000/orders', checkOutInfo).then((res) => {
      if (res) {
        Swal.fire({
          title: 'Thank You For Order💖',
          icon: 'success',
        });
        setEnjoy(true);
      }
    });
  };

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to update dimensions on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Delivery Information</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="name">Email</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Phone</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="name">City</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Address</Label>
            <Textarea
              id="name"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="mt-2"
            />
          </div>
          <div className="flex items-center gap-2 mt-5">
            <Label className="text-lg">Scheduled Delivery</Label>
            <Switch onClick={() => setScheduled(!scheduled)} />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="w-full">
              <Label htmlFor="note">Note</Label>
              <Input
                disabled={!scheduled}
                type="text"
                value={formData.note}
                onChange={(e) =>
                  setFormData({ ...formData, note: e.target.value })
                }
                id="note"
                className="mt-3"
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <Label className="mb-3" htmlFor="name">
                Date
              </Label>
              <DatePickerWithPresets disabled={!scheduled} />
            </div>
          </div>
          <div className="mt-3">
            <Label className="text-lg">Payment method</Label>
            <div className="flex gap-5 mt-5">
              <RadioGroup
                defaultValue="comfortable"
                onChange={(value) => {
                  if (typeof value === 'string') {
                    setFormData({ ...formData, payment: value });
                  }
                }}
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="online"
                    id="r1"
                    className="border border-gray-400"
                  />
                  <Label htmlFor="r1">Online payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="cash"
                    id="r2"
                    className="border border-gray-400"
                  />
                  <Label htmlFor="r2">Cash on delivery</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg w-full">
        <h1 className="mb-2">Order Summery</h1>
        <div className="border border-gray-300 rounded-md h-[60vh] p-10 flex flex-col">
          <div className="flex-grow  mb-2 space-y-2 overflow-auto">
            {products.map((product) => (
              <div className="flex justify-between items-center bg-gray-100 p-1 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={product.img}
                    className="h-[82px] rounded-md mr-2"
                    alt=""
                  />
                  <div>
                    <h1 className="text-lg mb-2">{product.name}</h1>
                    <p>Price: {product.price}</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl mr-5">{product.quantity}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-lg">
              <p>Subtotal</p>
              <p>{Math.ceil(total)}৳</p>
            </div>
            <div className="flex justify-between text-lg">
              <p>Delivery</p>
              <p>120.5৳</p>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>{Math.ceil(total + 120.5)}৳</p>
            </div>
            <Button
              disabled={Math.ceil(total) <= 0 ? true : false}
              className="w-full"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>{' '}
      {enjoy && (
        <div className="hidden md:block">
          <Confetti
            width={windowDimensions.width - 300}
            height={windowDimensions.height - 20}
          />
        </div>
      )}
    </div>
  );
}

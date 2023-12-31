import ProductCard from '@/components/ProductCard';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { IProduct } from '@/types/globalTypes';
import Lottie from 'lottie-react';
import filterImg from '../assets/images/filter.json';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  setPriceRange,
  toggleState,
} from '@/redux/features/products/productSlices';
import Loder from '@/components/Loder';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { Link } from 'react-router-dom';

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);

  const { toast } = useToast();

  const { priceRange, status } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
  };

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { stock: number; price: number }) =>
        item.stock >= 1 && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else {
    productsData = data;
  }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            onClick={() => dispatch(toggleState())}
            className="flex items-center space-x-2 mt-3"
          >
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[90]}
              max={1000}
              min={1}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
          <div className="container mx-auto pt-10">
            <Link to="/postBook">
              <button className="btn text-white shadow-xl transform transition-transform duration-300 hover:scale-110">
                Post A Book
              </button>
            </Link>
          </div>

          <div className="absolute bottom-0 mx-auto">
            <Lottie className="w-[60%] mx-auto" animationData={filterImg} />
          </div>
        </div>
      </div>

      <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {productsData && !isLoading ? (
          productsData?.map((product: IProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))
        ) : (
          <Loder />
        )}
      </div>
    </div>
  );
}

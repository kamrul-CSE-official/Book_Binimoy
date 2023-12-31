import Loder from '@/components/Loder';
import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/features/carts/cartsSlices';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { useAppDispatch } from '@/redux/hooks';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { data: product, isLoading } = useSingleProductQuery(id);
  return (
    <>
      <div>
        {product && !isLoading ? (
          <div>
            <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
              <div className="w-[50%]">
                <img src={product?.data?.image} alt="" />
              </div>
              <div className="w-[50%] space-y-3">
                <h1 className="text-3xl font-semibold">
                  {product?.data?.name}
                </h1>
                <p className="text-xl">Rating: {product?.data?.rating}</p>
                <p className="text-xl font-bold">{product?.data?.price} ৳</p>
                <p className="my-2">{product?.data?.details}</p>
                <Button onClick={() => dispatch(addToCart(product?.data))}>
                  Add to cart
                </Button>
              </div>
            </div>{' '}
            <ProductReview id={product?.data?._id} />
          </div>
        ) : (
          <Loder />
        )}
      </div>
    </>
  );
}

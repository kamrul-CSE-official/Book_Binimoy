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
              <div className="w-[50%] h-fit">
                <img
                  className="w-1/2"
                  src={product?.data?.img}
                  alt="book img"
                />
              </div>
              <div className="w-[50%] space-y-3">
                <h1 className="text-3xl font-semibold">
                  {product?.data?.name}
                </h1>
                <h4>{product?.data?.author}</h4>
                <p className="text-xl font-bold">{product?.data?.price} ৳</p>
                <p>Contition: {product?.data?.condition}</p>
                <p className="my-2">{product?.data?.contact}</p>
                <p className="text-red-500 font-bold">
                  {product?.data?.stock <= 0 && 'Stock Out'}
                </p>
                <h4>Seller: </h4>
                <div className="avatar">
                  <div className="w-12">
                    <img src={product?.data?.sellerInfo?.imag} />
                  </div>
                  <small className="ml-3 mt-3">
                    {product?.data?.sellerInfo?.name}
                  </small>
                </div>
                <br />
                <Button
                  disabled={product?.data?.stock <= 0 ? true : false}
                  onClick={() => dispatch(addToCart(product?.data))}
                >
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

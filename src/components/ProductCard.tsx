import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/carts/cartsSlices';
import { HiShoppingCart } from 'react-icons/hi';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));

    toast({
      description: 'Product Added',
    });
  };
  return (
    <div key={product?._id}>
      <div className="card card-compact shadow-xl hover:shadow-2xl hover:scale-[102%] transition-all">
        <figure>
          <img src={product?.img} alt="product" className="cardImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>Condition: {product?.condition}</p>
          <p className="text-sm font-bold">
            Availability:{' '}
            <span
              className={`${
                product?.stock <= 0 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {product?.stock >= 1 ? 'In stock' : 'Out Of Stock'}
            </span>
          </p>
          <p className="text-sm font-bold">
            Price: <span className="text-green-500">{product?.price}</span>
          </p>
          <div className="flex items-center justify-between">
            <Link to={`/product-details/${product?._id}`}>
              <Button variant="default">Details</Button>
            </Link>
            <Button
              disabled={product?.stock <= 0 ? true : false}
              variant="default"
              onClick={() => handleAddProduct(product)}
            >
              <HiShoppingCart size={20} />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

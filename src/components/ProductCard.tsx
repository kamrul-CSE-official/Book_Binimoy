import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/carts/cartsSlices';

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
    <div key={product?.id}>
      <div className="card card-compact shadow-xl hover:shadow-2xl hover:scale-[102%] transition-all">
        <figure>
          <img src={product?.image} alt="product" className="cardImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>Rating: {product?.rating}</p>
          <p className="text-sm">
            Availability: {product?.status ? 'In stock' : 'Out of stock'}
          </p>
          <p className="text-sm">Price: {product?.price}</p>
          <div className="flex items-center justify-between">
            <Link to={`/product-details/${product.id}`}>
              <Button variant="default">Details</Button>
            </Link>
            <Button variant="default" onClick={() => handleAddProduct(product)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

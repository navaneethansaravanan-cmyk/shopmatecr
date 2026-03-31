import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import BackupImage from '../assets/images/backup.png'
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {

  const [product, setProduct] = useState([]);
  const param = useParams();

  const url = `http://localhost:8000/products/${param.id}`;

  console.log(url);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProduct(json);
    }

    fetchProduct();
  }, [url])

  const images = require.context('../assets/images', true);
  let productImage = "";
  try {
    productImage = product.image ? images(`./${product.image}`) : BackupImage;
  } catch (error) {
    productImage = images("./backup.png");
  }

  const { addToCart } = useCart();

  return (
    <main>
      <section className="flex justify-centre flex-wrap py-5">
        <div className="max-w-sm m-2">
          <img className="rounded" src={productImage} alt={product.id} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white m-2">
          <h2 className="text-4xl font-bold my-3 text-center lg:text-left">{product.name}</h2>
          <p className="my-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="p-2 text-lg font-bold text-blue-600">${product.price}</span>
            <button onClick={() => addToCart(product)} className="inline-flex items-center text-white bg-blue-500 border rounded-lg border-transparent hover:bg-blue-700 font-medium text-sm px-4 py-2.5 m-4">
              Add to Cart
            </button>
          </div>
          <Link to="/">
            <Button text="Back to Home" />
          </Link>
        </div>
      </section>
    </main>
  )
}


import { Link } from "react-router-dom";
import BackupImage from "../assets/images/backup.png"
import { useCart } from "../context/CartContext";

export const Card = ({product}) => {

  const images = require.context('../assets/images', true);
  let productImage = "";
  try {
     productImage = product.image ?images(`./${product.image}`)  : BackupImage;    
  } catch (error) {
    productImage = images("./backup.png");
  }

  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-600 dark:text-gray-200">
      <Link to={`/products/${product.id}`}>
        <img className="w-full h-64 object-cover rounded-t-lg" src={productImage} alt="" />
      </Link>
      <Link to={`/products/${product.id}`}>
        <h5 className="m-2 mt-6 text-2xl font-semibold tracking-tight text-heading">{product.name}</h5>
      </Link>
      <p className="m-2 text-body">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="p-2 text-lg font-bold text-blue-600">${product.price}</span>
        <button onClick={() => addToCart(product)} className="inline-flex items-center text-white bg-blue-500 border rounded-lg border-transparent hover:bg-blue-700 font-medium text-sm px-4 py-2.5 m-4">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

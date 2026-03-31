import { Route, Routes } from 'react-router-dom'
import { ProductList } from '../pages/ProductList'
import { ProductDetail } from '../pages/ProductDetail';
import { Cart } from '../pages/Cart';

export const AllRoutes = () => {
  return (
    <div className='dark:bg-gray-800'>
        <Routes>
          <Route path="/" element={<ProductList apiPath="products" />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </div>
  )
}

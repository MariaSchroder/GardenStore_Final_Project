import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import AllProductsPage from './pages/AllProductsPage';
import CategoryProductsPage from './pages/CategoryProductsPage';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/allproducts' element={<AllProductsPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path=':category' element={<CategoryProductsPage />} />
          
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

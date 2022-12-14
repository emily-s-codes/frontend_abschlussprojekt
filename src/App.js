import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Onboarding from "./pages/Onboarding";
import ProductDetail from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import SplashScreen from './pages/SplashScreen';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path={"/"} element={<SplashScreen />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/onboarding"} element={<Onboarding />} />
          <Route path={"/filter"} element={<Filter />} />
          <Route path={"/shoppingcart"} element={<ShoppingCart />} />
          <Route path={"/product/:id"} element={<ProductDetail />} />
          <Route path={"/productlist"} element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

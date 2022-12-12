import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Onboarding from "./pages/Onboarding";
import ProductDetail from "./pages/ProductDetails";
import Filter from "./pages/Filter";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/onboarding"} element={<Onboarding />} />
          <Route path={"/filter"} element={<Filter />} />
          <Route path={"/product/:name"} element={<ProductDetail />} />
          <Route path={"/productlist"} element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

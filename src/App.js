import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Onboarding from "./pages/Onboarding";
import ProductDetail from "./pages/ProductDetails";
import Filter from "./pages/Filter";
import ProductList from "./pages/ProductList";
import { useEffect, useState } from 'react';

const apiData = "https://dummyjson.com/products";

function App() {
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    fetch(apiData)
      .then((response) => response.json())
      .then((arrayData) => {
        setArrayData(arrayData)
        console.log(arrayData.products)
      })
  }, [])


  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/onboarding"} element={<Onboarding />} />
          <Route path={"/filter"} element={<Filter />} />
          <Route path={"/product/:id"} element={<ProductDetail />} />
          <Route path={"/productlist"} element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

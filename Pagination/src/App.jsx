import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

import "./App.css";

function App() {
  const [apiData, setApiData] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();

        if (result && result.products) {
          setApiData(result);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentPosts = apiData.products.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <h1>Products</h1>
          <Card Products={currentPosts} />
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={apiData.products.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
}

export default App;

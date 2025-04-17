import React, { useState } from "react";
import { useEffect } from "react";
import Pagination from "./pagination";
const Products = () => {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchproducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setproducts(data.products);
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  const page_size = 10;
  const start = page * page_size - 10;
  const end = page * page_size;
  const noOfPages = Math.ceil(products.length / 10);
  return (
    <>
      <div>{products.length === 0 && <div>Loading...</div>}</div>
      <div className="products-card">
        {products.slice(start, end).map((item) => {
          return (
            <div className="products" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div>
        {products.length > 0 && (
          <Pagination
            noOfPages={noOfPages}
            currentPage={page}
            setPage={setPage}
          />
        )}
      </div>
    </>
  );
};

export default Products;

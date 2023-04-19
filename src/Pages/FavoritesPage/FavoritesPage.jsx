import { Pagination, Stack } from "@mui/material";
// import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
// import AddProduct from "../AddProduct/AddProduct";
// import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [page, setPage] = useState(1);
  const productsPerPage = 10;
  const count = Math.ceil(products.length / productsPerPage);

  const [searchParams] = useSearchParams();
  const res = products.filter((item) => (item.is_favorite ? true : false));

  useEffect(() => {
    getProducts();
    if (!JSON.parse(localStorage.getItem("favorites"))) {
      localStorage.setItem("favorites", JSON.stringify(res));
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function handlePage(event, value) {
    setPage(value);
  }

  function currentData() {
    if (!JSON.parse(localStorage.getItem("favorites"))) {
      localStorage.setItem("favorites", JSON.stringify(res));
    }
    const res = JSON.parse(localStorage.getItem("favorites"));
    let start = (page - 1) * productsPerPage;
    let end = start + productsPerPage;

    return res.slice(start, end);
  }

  return (
    <div className="list_wrapper" style={{ display: "flex", height: "500px" }}>
      <div className="list_item">
        <div
          className="product-card"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {currentData().map((product) => {
            console.log(product);
            if (product.is_favorite) {
              return (
                <div key={product.id}>
                  <img src={product.images} height={200} alt="error" />
                  <h3>{product.title}</h3>
                  <h4>{product.category_name}</h4>
                  <p>{product.body}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="pagination">
          <Stack spacing={1}>
            <Pagination
              onChange={handlePage}
              page={page}
              count={count}
              variant="outlined"
              shape="rounded"
              sx={{ display: "flex", justifyContent: "center" }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

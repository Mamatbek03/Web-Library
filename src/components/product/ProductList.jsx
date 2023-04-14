import { Box, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginationList from "./PaginationList";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(products);
  console.log(products.is_liked);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function getPagesCount() {
    let pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
    console.log(products);
  }, [searchParams]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "90px",
          marginBottom: "20px",
          // justifyContent: "space-between",
        }}
      >
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>
      <PaginationList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getPagesCount={getPagesCount}
      />
    </div>
  );
};

export default ProductList;

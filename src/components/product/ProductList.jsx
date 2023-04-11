import { Box, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

import { useProducts } from "../../contexts/ProductContextProvider";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, searchParams } = useProducts();

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
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
      <Stack spacing={2}></Stack>
    </div>
  );
};

export default ProductList;

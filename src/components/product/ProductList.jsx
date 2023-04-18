import { Box, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginationList from "./PaginationList";
import SideBar from "./SideBar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./styles/ProductList.css";
import Search from "./Search";
import Filter from "./Filter";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(products);

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

  let [heartOpen, setHeartOpen] = useState(false);

  return (
    <div>
      <div>
        <Search />
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          marginBottom: "20px",
          justifyContent: "center",
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

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const SideBar = () => {
  const {
    getProducts,
    search,
    setSearch,
    searchParams,
    category,
    setSearchParams,
    fetchByParams,
    categories,
    getCategories,
    products,
    author,
    setAuthor,
  } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    setSearchParams({ search: search });
    // getProducts();
  }, [search]);
  useEffect(() => {
    setSearchParams({ category: category });
    // getProducts();
  }, [category]);
  useEffect(() => {
    setSearchParams({ author: author });
  }, [author]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid
      sx={{
        width: "min-content",
        backgroundColor: "silver",
        height: "min-content",
        color: "black",
        opacity: "0.8",
        border: "gold 3px solid",
        borderRadius: "0 0 25px 0",
      }}
      item
      md={4}
    >
      <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Поиск"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Paper>

      <Grid>
        <FormControl sx={{ marginLeft: "20px", marginTop: "20px" }}>
          <FormLabel id="demo-radio-buttons-group-label">категории:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            {categories.map((item) => (
              <FormControlLabel
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>
          {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Author</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("owner", e.target.value)}
            >
              {products.map((item) => {
                return (
                  <FormControlLabel
                    value={item.owner}
                    control={<Radio />}
                    label={item.owner_username}
                  />
                );
              })}
            </RadioGroup>
          </FormControl> */}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SideBar;

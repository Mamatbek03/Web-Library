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
  } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/product-list");
    setSearchParams({ search: search });
    getProducts();
  }, [search]);
  useEffect(() => {
    navigate("/product-list");
    setSearchParams({ category: category });
    getProducts();
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid item md={4}>
      <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Paper>

      <Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel value="1" control={<Radio />} label="Fantasy" />
            <FormControlLabel value="2" control={<Radio />} label="Mystery" />
            <FormControlLabel value="3" control={<Radio />} label="Romance" />
            <FormControlLabel value="4" control={<Radio />} label="Western" />
            <FormControlLabel value="5" control={<Radio />} label="Dystopian" />

            <FormControlLabel value="6" control={<Radio />} label="Thriller" />
            <FormControlLabel value="7" control={<Radio />} label="Horror" />
            <FormControlLabel value="8" control={<Radio />} label="Classic" />
            <FormControlLabel value="9" control={<Radio />} label="History" />
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="Children`s"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SideBar;

import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { Grid, Paper, TextField } from "@mui/material";

const Search = () => {
  const { getProducts, search, setSearch, searchParams, setSearchParams } =
    useProducts();

  useEffect(() => {
    setSearchParams({ title: search });
    getProducts();
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div>
      <Grid item md={4}>
        <Paper
          elevation={1}
          sx={{
            width: "30%",
            boxShadow: "none",
            border: "2px solid black",
            mt: "30px",
            ml: "20px",
          }}
        >
          <TextField
            fullWidth
            id="standard-basic"
            label="Search"
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default Search;

import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

const Filter = () => {
  const { fetchByParams, searchParams, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <Grid>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("type", e.target.value)}
        >
          <FormControlLabel
            value="Fantasy"
            control={<Radio />}
            label="Fantasy"
          />
          <FormControlLabel
            value="Mystery"
            control={<Radio />}
            label="Mystery"
          />
          <FormControlLabel
            value="Romance"
            control={<Radio />}
            label="Romance"
          />
          <FormControlLabel
            value="Western"
            control={<Radio />}
            label="Western"
          />
          <FormControlLabel
            value="Dystopian"
            control={<Radio />}
            label="Dystopian"
          />

          <FormControlLabel
            value="Thriller"
            control={<Radio />}
            label="Thriller"
          />
          <FormControlLabel value="Horror" control={<Radio />} label="Horror" />
          <FormControlLabel
            value="Classic"
            control={<Radio />}
            label="Classic"
          />
          <FormControlLabel
            value="History"
            control={<Radio />}
            label="History"
          />
          <FormControlLabel
            value="Children`s"
            control={<Radio />}
            label="Children`s"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default Filter;

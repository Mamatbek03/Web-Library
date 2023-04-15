import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./styles/AddProduct.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, createProduct } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [pdf, getPdf] = useState(null);
  // const [comment, getPdf] = useState(null);
  // const [likesCount, getPdf] = useState(null);
  // const [like, getPdf] = useState(null);
  // const [favorite, getPdf] = useState(null);
  // const [favorite, getPdf] = useState(null);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("body", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("images", image);
    newProduct.append("pdf", pdf);
    createProduct(newProduct);
  }

  console.log(title, description, price, image, category);
  return (
    <div
      className="add-book"
      style={{
        height: "1000px",
        backgroundColor: "gray",
        padding: "20px 0 50px",
      }}
    >
      <div
        className="add-book_places"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: " 50px auto",
          backgroundColor: "white",
          width: "40%",
          padding: "50px 90px",
          borderRadius: "30px",
        }}
      >
        <center>
          <h1 className="add-book_header" style={{ margin: "10px 0 20px" }}>
            Add Book
          </h1>
        </center>

        <FormControl fullWidth>
          <InputLabel id="demo-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <TextField
          className="add-book_inp"
          sx={{ width: "100%", height: "20%", margin: "20px 0 10px" }}
          id="outlined-basic"
          label="title"
          variant="outlined"
          color="grey"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <center
          className="add-book_rower"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h3
            className="add-book_image"
            style={{ margin: "20px 30px 0 10px   " }}
          >
            choose a image <br className="unrower" /> for the header
          </h3>
          <TextField
            className="add-book_inp"
            sx={{ width: "100%", height: "20%", margin: "10px 0" }}
            id="outlined-basic"
            variant="outlined"
            color="grey"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </center>
        <center
          className="add-book_rower"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h3
            className="add-book_pdf"
            style={{ margin: "20px 38px 0 10px   " }}
          >
            choose a book
          </h3>
          <TextField
            className="add-book_inp"
            sx={{ width: "100%", height: "20%", margin: "10px 0" }}
            id="outlined-basic"
            variant="outlined"
            // label="price"
            color="grey"
            name="pdf"
            type="file"
            accept="image/*"
            onChange={(e) => getPdf(e.target.files[0])}
          />
        </center>
        <TextField
          className="add-book_inp"
          sx={{ width: "100%", height: "20%", margin: "10px 0" }}
          id="outlined-basic"
          label="price"
          variant="outlined"
          color="grey"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <TextField
          className="add-book_inp"
          sx={{ margin: "10px 0 20px " }}
          id="outlined-basic"
          label="description"
          variant="outlined"
          color="grey"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={() => {
            handleSave();
            navigate("/product-list");
          }}
          variant="contained"
          size="large"
          sx={{
            padding: "10px 0",
            border: "1px solid black",
            color: "white",
            backgroundColor: "black",
          }}
        >
          ADD book
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

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
    <Box
      sx={{
        width: "40vw",
        margin: "5vh auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // background: "rgb(254, 249, 239)",
        gap: "30px",
        padding: "20px",
      }}
    >
      <h1>Add book</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>choose category</option>

        {categories?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        color="grey"
        name="title"
        size="small"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="description"
        variant="outlined"
        color="grey"
        name="description"
        size="small"
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="price"
        variant="outlined"
        color="grey"
        name="price"
        size="small"
        onChange={(e) => setPrice(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        variant="outlined"
        color="grey"
        name="image"
        size="small"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        color="grey"
        name="pdf"
        size="small"
        type="file"
        accept="image/*"
        onChange={(e) => getPdf(e.target.files[0])}
      />

      <Button
        onClick={() => {
          handleSave();
          navigate("/product-list");
        }}
        variant="contained"
        size="large"
        sx={{
          border: "1px solid black",
          color: "white",
          backgroundColor: "black",
        }}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;

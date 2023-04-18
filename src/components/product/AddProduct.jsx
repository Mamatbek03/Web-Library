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
        backgroundColor: "transparent",
        padding: "50px 0 30px",
      }}
    >
      <div
        className="add-book_places"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: " 50px auto",
          backgroundColor: "rgb(66,66,66)",
          opacity: "0.9",
          width: "40%",
          padding: "50px 90px",
          borderRadius: "30px",
          color: "white",
          border: "white 2px solid",
          boxShadow: "#fc0 0px 0 10px",
        }}
      >
        <center>
          <h1
            className="add-book_header"
            style={{
              margin: "10px 0 20px",
              fontSize: "3rem",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Добавим вашу книгу
          </h1>
        </center>

        <FormControl fullWidth>
          <h3>Выберите категорию:</h3>
          <InputLabel id="demo-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ backgroundColor: "white" }}
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
        <input
          className="add-book_inp"
          type="input"
          sx={{
            width: "100%",
            height: "20%",
            margin: "20px 0 10px",
            backgroundColor: "white",
          }}
          id="outlined-basic"
          placeholder="Заголовок"
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
            style={{
              margin: "20px 30px 0 10px",
              fontSize: "1.5rem",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Изображение для обложки
          </h3>
          <TextField
            className="add-book_inp"
            sx={{
              width: "100%",
              height: "20%",
              margin: "10px 0",
              backgroundColor: "white",
            }}
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
            style={{
              margin: "20px 38px 0 10px",
              fontSize: "1.5rem",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Загрузить книгу
          </h3>
          <TextField
            className="add-book_inp"
            sx={{
              width: "100%",
              height: "20%",
              margin: "10px 0",
              backgroundColor: "white",
            }}
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
        <input
          className="add-book_inp"
          type="input"
          style={{
            width: "100%",
            height: "20%",
            margin: "10px 0",
            backgroundColor: "white",
          }}
          id="outlined-basic"
          placeholder="Цена"
          variant="outlined"
          color="grey"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="add-book_inp"
          type="input"
          style={{ margin: "10px 0 20px ", backgroundColor: "white" }}
          id="outlined-basic"
          placeholder="Описание"
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
          color="success"
          sx={{
            padding: "10px 0",
            border: "1px solid black",
            color: "white",
            backgroundColor: "rgb(66,66,66)",
            textShadow: "#fc0 0px 0 5px",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;

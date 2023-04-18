import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "./EditProductStyle.css";

const EditProduct = () => {
  const {
    getCategories,
    categories,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useProducts();

  const { id } = useParams();
  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.body);
      setPrice(oneProduct.price);
      setImage(oneProduct.photo);
      setCategory(oneProduct.category);
      console.log(oneProduct);
    }
  }, [oneProduct]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("body", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("photo", image);

    updateProduct(id, newProduct);
  }

  return (
    <div className="d-flex flex-column w-50 m-auto" id="edit_main">
      <h1>EDIT product</h1>
      <select
        className="edit_inp"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>choose category</option>
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="edit_inp"
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="edit_inp"
      />
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="edit_inp"
      />
      {/* <p>Image before</p> */}
      <img src={oneProduct?.photo} width="100" alt="" />
      <input
        type="text"
        placeholder="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="edit_inp"
      />
      {/* <input
        type="file"
        accept="image/*"
        onChange={(e) => setPdf(e.target.files[0])}
      /> */}
      <button onClick={handleSave} id="edit_btn">
        save changes
      </button>
    </div>
  );
};

export default EditProduct;

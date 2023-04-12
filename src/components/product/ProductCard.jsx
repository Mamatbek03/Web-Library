import { Email } from "@mui/icons-material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <div className="border border-dark m-3">
      <img src={item.image} width={200} alt="" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <p>{item.type}</p>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;

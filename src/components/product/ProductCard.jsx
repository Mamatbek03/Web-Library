import { Email } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../contexts/CartContexProvider";
import "./ProductCardStyle.css";

const ProductCard = ({ item }) => {
  const {
    postLike,
    deleteLike,

    postFavorite,
    deleteFavorite,

    deleteProduct,
    getProducts,
  } = useProducts();

  const [isFavorite, setIsFavorite] = useState(item.is_favorite);
  const [isLiked, setIsLiked] = useState(item.is_liked);
  const [likesCount, setLikesCount] = useState(item.likes_count);
  const [commentsCount, setCommentsCount] = useState(item.comments_count);
  const [owner, setOwner] = useState(item.owner);
  const [ownerUserName, setOwnerUserName] = useState(item.owner);

  console.log(isFavorite, isLiked, likesCount, commentsCount);

  const formData = new FormData();
  function handleLike() {
    formData.append("post", item.id);
    const id = item.id;
    if (!isLiked) {
      setIsLiked(!isLiked);
      postLike(formData);
    } else {
      setIsLiked(!isLiked);
      deleteLike(id);
    }
  }
  function handleFavorite() {
    formData.append("is_favorite", isFavorite);
    const post = item.id;
    if (!isFavorite) {
      setIsLiked(!isFavorite);
      postFavorite(post);
    } else {
      setIsLiked(!isFavorite);
      deleteFavorite(post);
    }
  }
  useEffect(() => {
    getProducts();
  }, [isLiked]);
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <div
      className="border border-dark m-3"
      style={{
        boxShadow: "#fc0 0px 0 5px",
        margin: "30px",
        width: "18em",
        height: "25em",
        textAlign: "center",
        color: "white",
      }}
    >
      <img
        style={{
          width: "70%",
          margin: "15px 30px 20px",
          height: "200px",
        }}
        src={item.images}
        alt=""
      />
      <h3>{item.title}</h3>
      <p>{item.category_name}</p>
      {item.price ? <p>${item.price}</p> : <p>free</p>}
      <div>
        <IconButton onClick={handleLike}>
          <FavoriteIcon color={isLiked ? "error" : ""} />
          <p style={{ color: "white", textShadow: "#fc0 0px 0 5px" }}>
            {likesCount}
          </p>
        </IconButton>
        <IconButton onClick={handleFavorite}>
          <BookmarkIcon color={isFavorite ? "primary" : ""} />
        </IconButton>
        <IconButton>
          <CommentIcon />
          <p style={{ color: "white", textShadow: "#fc0 0px 0 5px" }}>
            {commentsCount}
          </p>
        </IconButton>
        <IconButton onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
        </IconButton>
      </div>
      <div>
        <button
          onClick={() => navigate(`/edit/${item.id}`)}
          class="product_btn_delete"
        >
          Edit
        </button>
        <button
          onClick={() => {
            // showProductDetails(formData);
            navigate(`/details/${item.id}`);
          }}
          class="product_btn_delete"
        >
          Details
        </button>
        <button
          onClick={() => deleteProduct(item.id)}
          class="product_btn_delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

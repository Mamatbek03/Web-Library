import { Email } from "@mui/icons-material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton } from "@mui/material";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

  const navigate = useNavigate();
  return (
    <div className="border border-dark m-3">
      <img src={item.image} width={200} alt="" />
      <h3>{item.title}</h3>
      <p>{item.category_name}</p>
      <p>{item.price}</p>
      <p>comments: {item.comments_count}</p>
      <div>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
        <button onClick={() => deleteProduct(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useComment } from "../../contexts/CommentContextProvider";
import moment from "moment/moment";
import "./styles/DetailsProduct.css";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";

const EditProduct = () => {
  const {
    getOneProduct,
    oneProduct,
    deleteProduct,
    postLike,
    deleteLike,
    getLikeList,
  } = useProducts();

  const { createComment, getComments, comments, setComments, deleteComment } =
    useComment();

  const navigate = useNavigate();
  const { id } = useParams();

  const [body, setText] = useState(null);

  const [date, setDate] = useState(null);

  const [flag, setFlag] = useState(false);

  const [likes, setLikes] = useState(null);

  const [isLiked, setIsLiked] = useState(oneProduct?.is_liked);

  const post = id;

  function addComment() {
    const comment = {
      body,
      post,
    };
    createComment(comment);
  }

  function timeDays(time) {
    const res = moment(time).format("DD.MM.YYYY");
    return res;
  }
  function timeHours(time) {
    const res = moment(time).format("  [Today] HH:mm");
    return res;
  }

  useEffect(() => {
    if (!date) setDate(new Date().getDay());
  }, []);

  useEffect(() => {
    getOneProduct(id);
    getComments();
    getLikeList(setLikes);
  }, []);
  function likeForDelete() {
    const deleteLike = likes?.filter((item) => item.post === id);
    console.log(deleteLike);
  }
  likeForDelete();

  function handlebtns(e, id) {
    if (e.target.className == id) {
      console.log(e.target.className);
      flag ? setFlag(false) : setFlag(true);
    }
  }

  const formData = new FormData();
  function handleLike() {
    formData.append("post", post);
    if (!isLiked) {
      setIsLiked(!isLiked);
      postLike(formData);
    } else {
      setIsLiked(!isLiked);
      deleteLike(id);
    }
  }
  console.log(oneProduct?.pdf);
  return (
    <>
      <div className="details">
        <div className="details_left">
          <img className="details_left_img" src={oneProduct?.images} alt="" />
          <div className="details_left_btns">
            <button
              className="details_left_btn"
              onClick={() => navigate("/online-read/:id")}
            >
              online read
            </button>
            <button className="details_left_btn">
              <a
                href={oneProduct?.pdf}
                // download={oneProduct?.title + ".pdf"}
                target="_blank"
              >
                download
              </a>
            </button>
          </div>
        </div>
        <div className="details_info">
          <h2>{oneProduct?.title}</h2>
          <h3>category: {oneProduct?.category_name}</h3>
          <p>{oneProduct?.body}</p>
          {oneProduct?.price ? (
            <>
              <h3>${oneProduct?.price}</h3>
              <button>bay now</button>
            </>
          ) : (
            <h3>free</h3>
          )}
          <div>
            <IconButton onClick={handleLike}>
              <FavoriteIcon color={isLiked ? "error" : ""} />
              <p>{oneProduct?.likes_count}</p>
            </IconButton>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </div>
          <div>
            <button onClick={() => navigate(`/edit/${oneProduct?.id}`)}>
              Edit
            </button>
            <button onClick={() => deleteProduct(oneProduct?.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="comments">
        <h2>Comments: {oneProduct?.comments_count}</h2>
        <input
          type="text"
          value={body}
          placeholder="add comment"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addComment}>send</button>
        <div className="comments_list">
          {oneProduct?.comments.map((item) => (
            <div
              key={item.created_at}
              onClick={(e) => handlebtns(e, "item" + item.id)}
              // className="comments_item"
            >
              <p className={"item" + item.id}>
                {item.owner}
                {date >= 1
                  ? timeDays(item.created_at)
                  : timeHours(item.created_at)}
              </p>
              <p>{item.body}</p>
              {flag ? (
                <>
                  <button>edit</button>
                  <button onClick={() => deleteComment(item.id)}>delete</button>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EditProduct;

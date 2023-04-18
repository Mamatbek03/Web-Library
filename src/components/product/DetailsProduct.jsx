import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useComment } from "../../contexts/CommentContextProvider";
import moment from "moment/moment";
import "./styles/DetailsProduct.css";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const EditProduct = () => {
  const {
    getOneProduct,
    oneProduct,
    deleteProduct,
    postLike,
    deleteLike,
    getLikeList,
    getProducts,
    postFavorite,
  } = useProducts();

  const {
    createComment,
    getComments,
    comments,
    setComments,
    deleteComment,
    editComment,
  } = useComment();

  const navigate = useNavigate();
  const { id } = useParams();

  const [commentToEdit, setCommentToEdit] = useState(null);

  const [bodyEdit, setBodyEdit] = useState(null);
  const [body, setBody] = useState(null);

  const [date, setDate] = useState(null);

  const [likes, setLikes] = useState(null);

  const [isFavorite, setIsFavorite] = useState(oneProduct?.is_favorite);

  const [isLiked, setIsLiked] = useState(oneProduct?.is_liked);

  const post = id;

  function addComment() {
    const comment = {
      body,
      post,
    };
    createComment(comment)
      .then(() => {
        setBody("");
        getOneProduct(id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleDeleteComment(commentId) {
    await deleteComment(commentId);
    getOneProduct(id);
    console.log(oneProduct);
    getOneProduct(id);
  }

  console.log(oneProduct);
  function handleEditComment(commentEdit) {
    handleOpen();

    setCommentToEdit(commentEdit);
  }
  async function saveEditedComment() {
    const formData = new FormData();
    formData.append("body", bodyEdit);
    formData.append("post", bodyEdit);
    await editComment(formData);
    setCommentToEdit(null);
  }
  console.log(oneProduct?.post);

  function timeDays(time) {
    const res = moment(time).format("  DD.MM.YYYY");
    return res;
  }
  function timeHours(time) {
    const res = moment(time).format("  [Today] HH:mm");
    return res;
  }

  useEffect(() => {
    if (!date) setDate(moment(new Date()).format("DD.MM.YYYY"));
  }, []);

  useEffect(() => {
    getOneProduct(id);
    getComments();
    getLikeList(setLikes);
  }, []);
  function likeForDelete() {
    const deleteLike = likes?.filter((item) => item.post === id);
    console.log(deleteLike);
    // console.log(deleteLike.data);
  }
  likeForDelete();

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
  console.log(comments);
  // ! Favorite

  function handleFavorite() {
    formData.append("post", oneProduct?.id);
    if (!isFavorite) {
      setIsFavorite(!isFavorite);
      postFavorite(formData);
    } else {
      setIsFavorite(!isFavorite);
      postFavorite(formData);
    }
  }
  // ! Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <IconButton onClick={handleFavorite}>
              <BookmarkIcon color={isFavorite ? "primary" : ""} />
            </IconButton>
          </div>
          <div>
            <button onClick={() => navigate(`/edit/${oneProduct?.id}`)}>
              Edit
            </button>
            <button
              onClick={async () => {
                await deleteProduct(oneProduct?.id);
                navigate("/product-list");
              }}
            >
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
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={addComment}>send</button>
        <div className="comments_list">
          {oneProduct?.comments.map((item) => (
            <div
              key={item.created_at}
              // className="comments_item"
            >
              <p>{item.owner}</p>
              <p>{item.body}</p>
              <p>
                {" "}
                {date !== moment(item.created_at).format("DD.MM.YYYY")
                  ? // ! timeDays(item.created_at) -------------------------------
                    timeDays(item.created_at)
                  : timeHours(item.created_at)}
              </p>
              <div>
                <button onClick={() => handleEditComment(item)}>edit</button>
                <button onClick={() => handleDeleteComment(item.id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <center>
              <h3>Edit Comment</h3>
              <TextField
                label="new Comment"
                defaultValue={commentToEdit?.body}
                onChange={(e) => setBodyEdit(e.target.value)}
              />
              <Button
                onClick={() => {
                  saveEditedComment();
                  handleClose();
                }}
              >
                save changes
              </Button>
            </center>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default EditProduct;

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

  useEffect(() => {
    getOneProduct(id);
    getComments();
    getLikeList(setLikes);
  }, []);
  const [commentToEdit, setCommentToEdit] = useState(null);

  const [bodyEdit, setBodyEdit] = useState(null);
  const [body, setBody] = useState(null);

  const [date, setDate] = useState(null);

  const [likes, setLikes] = useState(null);
  const [likesCount, setLikesCount] = useState(oneProduct?.likes_count);
  const [isFavorite, setIsFavorite] = useState(oneProduct?.is_favorite);
  const [isLiked, setIsLiked] = useState(oneProduct?.is_liked);
  const [likedUsers, setLikesUsers] = useState(oneProduct?.liked_users);

  const post = id;
  console.log(isLiked);

  async function handleLike() {
    const formData = new FormData();
    formData.append("post", id);
    if (!isLiked) {
      setIsLiked(!isLiked);
      setLikesCount(likesCount + 1);
      await postLike(formData);
      getOneProduct(id);
      getOneProduct(id);
    } else {
      setIsLiked(!isLiked);
      setLikesCount(likesCount - 1);
      likedUsers.map((like) => {
        const email = localStorage.getItem("email");
        if (like.owner_email == email) {
          deleteLike(like.id);
        }
      });
    }
  }
  console.log(oneProduct);
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
    getOneProduct(id);
  }

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
    <div className="details_main">
      <div className="details">
        <div className="details_left">
          <img className="details_left_img" src={oneProduct?.images} alt="" />
          <div className="details_left_btns">
            <button
              className="details_left_btn"
              onClick={() => navigate("/online-read/:id")}
            >
              Читать
            </button>
            <button className="details_left_btn">
              <a
                href={oneProduct?.pdf}
                // download={oneProduct?.title + ".pdf"}
                target="_blank"
              >
                Скачать
              </a>
            </button>
          </div>
        </div>
        <div className="details_info">
          <h2 className="details_title">{oneProduct?.title}</h2>
          <h3 className="details_category">
            category: {oneProduct?.category_name}
          </h3>
          <p>{oneProduct?.body}</p>
          {oneProduct?.price ? (
            <>
              <h3 className="details_price">${oneProduct?.price}</h3>
              <button className="details_btn_buy">Купить сейчас</button>
            </>
          ) : (
            <h3 className="details_price">Бесплатно</h3>
          )}

          <div>
            <button
              className="details_btn_edit"
              onClick={() => navigate(`/edit/${oneProduct?.id}`)}
            >
              Изменить
            </button>
            <button
              className="details_btn_delete"
              onClick={async () => {
                await deleteProduct(oneProduct?.id);
                navigate("/product-list");
              }}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
      <div className="comments">
        <h2>Комментарии: {oneProduct?.comments_count}</h2>
        <div className="comments_all">
          <input
            className="details_inp"
            type="text"
            value={body}
            placeholder="Комментарии"
            onChange={(e) => setBody(e.target.value)}
          />
          <button className="details_btn_inp" onClick={addComment}>
            Добавить
          </button>
        </div>

        <div className="comments_list">
          {oneProduct?.comments.map((item) => (
            <div
              className="comments_list_main"
              key={item.created_at}
              // className="comments_item"
            >
              <p>{item.owner}</p>
              <textarea className="details_textarea" readOnly>
                {item.body}
              </textarea>

              <div
                style={{
                  width: "50%",
                  display: "flex",
                  marginTop: "30px",
                  justifyContent: "space-around",
                }}
              >
                <p style={{ paddingTop: "10px" }}>
                  {date !== moment(item.created_at).format("DD.MM.YYYY")
                    ? // ! timeDays(item.created_at) -------------------------------
                      timeDays(item.created_at)
                    : timeHours(item.created_at)}
                </p>
                <button
                  className="details_btn_delete"
                  onClick={() => handleDeleteComment(item.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <Button className="details_btn_openmodal" onClick={handleOpen}>
          Открыть окно
        </Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <center>
              <h3 className="details_h3">Изменить комментарии</h3>
              <TextField
                label="Новый комментарий"
                defaultValue={commentToEdit?.body}
                onChange={(e) => setBodyEdit(e.target.value)}
              />
              <Button
                className="details_btn_save"
                onClick={() => {
                  saveEditedComment();
                  handleClose();
                }}
              >
                Сохранить изменения
              </Button>
            </center>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default EditProduct;

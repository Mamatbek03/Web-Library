import React from "react";
import "./Footer.css";
import logo from "./media/logo.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer_left">
        <img id="footer_logo" src={logo} alt="" />
        <p>Количество книг: 0</p>
      </div>
      <div id="footer_center">
        <p>Право обладания</p>
        <p>Партнёрство</p>
        <p>Контакты</p>
        <p>О нас</p>
      </div>
      <div id="footer_right">
        <input type="text" placeholder="Введите почту" />
        <button>Подписаться</button>
      </div>
    </div>
  );
};

export default Footer;

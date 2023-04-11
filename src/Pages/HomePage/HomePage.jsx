import React from "react";
import logo from "./media/logo.svg";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div>
      <div id="main">
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          eius.
        </h2>
        <img id="logo" src={logo} alt="" />
        <p>Количество книг: 0</p>
        <input placeholder="Введите название"></input>
        <p>Популярные книги</p>
        <div></div>
        <p>Категория: Детектив</p>
        <div></div>
        <p>Категория: Дорама</p>
        <div></div>
        <p>Категория: Фантастика</p>
        <div></div>
        <p>Категория: Детское</p>
      </div>
    </div>
  );
};

export default HomePage;

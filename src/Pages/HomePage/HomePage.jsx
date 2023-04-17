import React from "react";
import logo from "./media/logo.svg";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="main">
        <h1>
          SalamatBook - читайте и добавляйте книги, будем вместе расширять
          библиотеку. В этом году нам будет 30лет!
        </h1>
        <div>
          <img id="logo" src={logo} alt="" />
          SalamatBook
        </div>
        <input id="homepage_search" placeholder="Введите название книги" />
        <p>Популярные книги</p>
        <div></div>
        <hr className="hr_line" />
        <p>Категория: Детектив</p>
        <div></div>
        <hr className="hr_line" />
        <p>Категория: Дорама</p>
        <hr className="hr_line" />
        <div></div>
        <p>Категория: Фантастика</p>
        <div></div>
        <hr className="hr_line" />
        <p>Категория: Детское</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>

        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default HomePage;

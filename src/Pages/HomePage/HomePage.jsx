import React from "react";
import logo from "./media/logo.svg";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import books from "./media/books.jpg";
import books2 from "./media/books2.jpg";
import library from "./media/library.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="main">
        <div id="main_logo">
          <img id="logo" src={logo} alt="" />
          SalamatBook
        </div>
        <h1>
          SalamatBook - читайте и добавляйте книги, будем вместе расширять
          библиотеку. В этом году нам будет 30лет!
        </h1>
        <input id="homepage_search" placeholder="Введите название книги" />
        <button id="homepage_button">ПОИСК</button>
        <p>Популярные книги</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, cum
          fugit quibusdam earum adipisci soluta temporibus ullam perferendis
          autem aperiam quis placeat quam repudiandae. Dicta, atque sed.
          Sapiente, ea est molestias odit blanditiis a aliquid amet delectus ex
          aut, repudiandae laudantium officiis corporis suscipit error ipsa,
          enim facere vero veritatis illo atque eos dolorem. Reiciendis culpa
          similique veritatis nostrum aspernatur voluptates iure architecto
          doloribus, ratione deleniti, aliquam incidunt quasi quae voluptatem
          amet ea error, odit sequi esse itaque fugiat? Ab dolores laboriosam
          velit labore, iste debitis expedita suscipit animi, nihil doloremque
          architecto! Sapiente explicabo neque id architecto ratione earum nisi!
        </p>
        <hr className="hr_line" />
        <p>Категория: Детектив</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit
          maiores quo doloribus molestias error aperiam labore laborum
          voluptatem praesentium, ut dolore, accusamus quibusdam nostrum
          necessitatibus illo quis sapiente possimus sunt sed! Odio placeat
          nobis accusantium id corporis, cumque eum!
        </p>
        <hr className="hr_line" />
        <p>Категория: Дорама</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          beatae iure sit recusandae modi explicabo rem voluptatibus nam culpa
          iste velit quod dolor corrupti, sequi accusamus, quae nemo, amet hic
          eveniet consequuntur. Obcaecati exercitationem atque, facere
          consequuntur blanditiis iste! Laboriosam ipsam quo magnam fuga officia
          libero eligendi? Laboriosam, provident inventore.
        </p>
        <hr className="hr_line" />
        <p>Категория: Фантастика</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo
          molestias accusamus! Totam corrupti iste ipsam facere eum enim libero,
          doloremque ad in ut quos iusto eligendi ab odio accusamus unde, quod
          mollitia odit, laboriosam explicabo. Exercitationem eos sed optio at,
          eligendi recusandae delectus obcaecati odio harum animi, atque a!
        </p>
        <hr className="hr_line" />
        <p>Категория: Детское</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptates rerum amet fugit quisquam ea minima itaque deleniti commodi
          rem animi atque tempore, doloribus nesciunt similique error.
          Quibusdam, ducimus consequatur.
        </p>
        <div id="hp">
          <img src={books} className="hp_image"></img>
          <img src={books2} className="hp_image"></img>
          <img src={library} className="hp_image"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

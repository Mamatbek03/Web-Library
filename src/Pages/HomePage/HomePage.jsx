import React from "react";
import logo from "./media/logo.svg";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="main">
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          eius.
        </h2>
        <img id="logo" src={logo} alt="" />
        <input
          id="homepage_search"
          placeholder="Введите название книги"
        ></input>
        <p>Популярные книги</p>
        <div></div>
        <p>Категория: Детектив</p>
        <div></div>
        <p>Категория: Драма</p>
        <div></div>
        <p>Категория: Фантастика</p>
        <div></div>
        <p>Категория: Детское</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          itaque, culpa assumenda reiciendis animi, harum obcaecati illum ipsa
          veniam rerum sequi quis corrupti tempora ipsum? Deserunt recusandae
          non alias molestiae quos error quidem esse pariatur obcaecati
          repudiandae! Non, blanditiis! Esse ab culpa magni, voluptate
          blanditiis optio natus quo quidem, illo recusandae distinctio? Vero,
          earum? Optio deleniti ipsa dolor dicta enim repellat cupiditate
          eveniet consequuntur molestiae quod nulla sapiente, minima
          accusantium, exercitationem animi veritatis atque earum, iure saepe
          voluptatibus distinctio. Vero voluptatibus cupiditate ipsum sed
          doloremque provident officia necessitatibus voluptates tenetur eius
          debitis, esse quo saepe aut placeat fugiat aliquam illum? Corrupti
          sint aut facilis ipsam illum ullam! Nemo at, assumenda ab molestiae
          doloremque quas eveniet. Magnam libero hic itaque voluptatum earum
          vero aut suscipit quidem molestias eveniet, dicta odit? Inventore
          maiores culpa quibusdam magnam iste. Sit mollitia quaerat veritatis
          eveniet perferendis, consequatur a molestias asperiores. Porro itaque,
          voluptas debitis dolore officiis quaerat dolorem animi voluptatum
          error, dolor aliquam nulla ad adipisci tempore, molestiae praesentium
          deserunt mollitia? Tenetur, veniam quis eveniet similique
        </p>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import "./Footer.css";
import logo from "./media/logo.svg";
import youtube_logo from "./media/youtube.svg";
import instagram_logo from "./media/instagram.svg";
import facebook_logo from "./media/facebook.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div id="footer">
      <div id="footer_left">
        <img id="footer_logo" src={logo} alt="" />
        <p>Количество книг: 0</p>
        <div>
          <input type="text" placeholder="Введите почту" id="footer_email" />
          <button id="footer_button">Подписатьcя</button>
        </div>
      </div>
      <div>
        <div id="footer_media">
          <p>
            Подписывайтесь на наши страницы в социальных сетях и следите за
            обновлением новостей!
          </p>
          <div id="footer__media_icons">
            <a href="https://www.youtube.com/">
              <img
                style={{ width: "40px", height: "40px" }}
                src={youtube_logo}
                alt=""
              />
            </a>
            <a href="instagram.com">
              <img
                style={{ width: "40px", height: "40px" }}
                src={instagram_logo}
                alt=""
              />
            </a>
            <a href="https://ru-ru.facebook.com/">
              <img
                style={{ width: "40px", height: "40px" }}
                src={facebook_logo}
                alt=""
              />
            </a>
          </div>
          <hr id="hr_footer" />
          <div id="footer_center">
            <p className="footer_link" onClick={() => navigate("/Partnership")}>
              Сотрудничество
            </p>

            <details className="footer_link">
              <summary>Контакты</summary>
              <p>Главный редактор</p>
              <input type="text" value="0501 619 690" disabled />
              <p>Справочная</p>
              <input type="text" value="0501 619 690" disabled />
            </details>

            <p className="footer_link" onClick={() => navigate("/Services")}>
              Услуги
            </p>

            <p className="footer_link" onClick={() => navigate("/AboutUs")}>
              О нас
            </p>
          </div>
        </div>
      </div>

      <div id="footer_right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5848.116462200845!2d74.58131820207608!3d42.87161506148272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d04d040001%3A0x435e5287f35c7d3c!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyBNYWtlcnMgQ29kaW5nIEJvb3RjYW1w!5e0!3m2!1sru!2skg!4v1681290014991!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{
            border: "3px solid white",
            padding: "4px",
            width: "350px",
            height: "330px",
            margin: "10px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;

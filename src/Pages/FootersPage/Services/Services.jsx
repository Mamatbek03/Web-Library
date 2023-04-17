import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services">
      <h2>Закажите свою любимую книгу</h2>
      <div id="services_main">
        <input type="text" placeholder="Название книги" />
        <input type="text" placeholder="Укажите автора" />
        <input type="text" placeholder="Год издания" />
        <input type="text" placeholder="Укажите ваш адрес" />
        <button>Заказать</button>
      </div>
    </div>
  );
};

export default Services;

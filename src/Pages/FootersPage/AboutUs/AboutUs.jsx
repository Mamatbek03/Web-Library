import React from "react";
import "./AboutUs.css";
import Image from "./images(AboutUs)/library-centre.jpg";

const AboutUs = () => {
  return (
    <div id="AboutUs_main">
      <div id="AboutUs_content">
        <div>
          <img id="about_image" src={Image} alt="" />
        </div>
        <div>
          <h2 className="AboutUs_text">О нашей онлайн библиотеке</h2>
          <p className="AboutUs_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            impedit velit magni reiciendis omnis. Dicta, veniam, autem similique
            nam vitae laborum unde nulla aut id illum aspernatur impedit
            officiis odit a iste voluptas animi vero sequi mollitia nisi vel
            omnis odio neque! Soluta hic quas natus. Dignissimos, labore rem
            nobis nesciunt dolorum quasi fugit sunt. Ipsum ea dolore placeat
            unde maiores mollitia ut nesciunt velit dicta repudiandae facilis
            aperiam quidem sunt, tempore voluptatem natus hic in laborum
            provident sequi? Dolor perspiciatis inventore, pariatur debitis ipsa
            autem sapiente? Commodi vitae numquam quisquam libero, corporis
            alias nobis porro? Placeat numquam ullam nobis odit id sunt eveniet,
            error exercitationem delectus quidem aliquid ratione quaerat,
            repudiandae ut ea, doloremque consectetur nulla soluta fugiat
            dolores laborum obcaecati praesentium natus quod. Temporibus
            perferendis voluptatibus eligendi commodi optio porro voluptatem.
            Molestiae placeat expedita totam aperiam corporis et at! Omnis nulla
            ducimus at, reiciendis cumque maiores? Cupiditate ea aut id ducimus
            vel natus non recusandae dolorum, architecto dignissimos similique
            eius commodi corporis error aliquam. Animi minima unde odit in
            inventore amet fuga, quis optio facilis temporibus dolor debitis
            obcaecati laudantium nemo fugit sit, aut voluptate veritatis modi
            suscipit error. Assumenda, doloribus ducimus? Quo corrupti
            dignissimos a facilis libero soluta at quidem vel, placeat sapiente
            itaque dicta. Eveniet eligendi dignissimos a, odit accusantium nisi
            ex blanditiis, laborum at eius voluptas odio doloremque corrupti est
            in culpa animi atque! Molestias laboriosam quam inventore corporis
            iste perferendis, illo non suscipit voluptatibus pariatur, ducimus
            voluptates doloremque! Placeat eveniet distinctio iusto itaque
            adipisci alias dolorum sit fugiat esse? Accusamus, nemo sit? Veniam
            voluptatibus, repellat consequuntur esse a ut numquam? Ipsum
            voluptates perferendis accusantium laudantium, eum, nobis quos
            corrupti iure aspernatur asperiores libero eligendi iste odit
            consequatur adipisci eos temporibus illo eius sed amet beatae
            architecto cumque, excepturi cum! Doloremque exercitationem sint
            atque accusantium!
          </p>
          <hr />
          <p id="AboutUs_form">Форма обратной связи</p>
          <input className="AboutUs_input" type="text" placeholder="Name" />
          <br />
          <input className="AboutUs_input" type="text" placeholder="Email" />
          <br />
          <p>
            Пожалуйста оставьте ваше пожелание, мы обязательно свяжемся с вами!
          </p>
          <textarea
            className="AboutUs_input"
            id="AboutUs_input_message"
            maxLength="1000"
            placeholder="Поле для вашего текста"
          ></textarea>
          <br />
          <button id="AboutUs_button">Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./AminatedImageOne.css";
import "./developer.css";

function AminatedImageOne() {
  return (
    <div className="anim-image-container">
      <img
        className="Desk"
        data-aos="fade-up"
        src="images/dev1/Desk.png"
        alt=""
      />
      <img
        data-aos="fade-down"
        className="Character_1_"
        src="images/dev1/Character_1_.png"
        alt=""
      />
      <img
        className="Pot_1_"
        data-aos="fade-left"
        src="images/dev1/Pot_1_.png"
        alt=""
      />
      <img
        className="Speech_Bubble_7_"
        data-aos="fade-right"
        src="images/dev1/Speech_Bubble_7_.png"
        alt=""
      />
      <img
        className="Text_Box_1_"
        data-aos="fade-down"
        src="images/dev1/Text_Box_1_.png"
        alt=""
      />
      <img
        className="Text_Box_2_"
        data-aos="fade-down"
        data-aos-delay="300"
        src="images/dev1/Text_Box_2_.png"
        alt=""
      />
      <img
        className="Text_Box_6_"
        data-aos="fade-down"
        data-aos-delay="600"
        src="images/dev1/Text_Box_6_.png"
        alt=""
      />
    </div>
  );
}

export default AminatedImageOne;

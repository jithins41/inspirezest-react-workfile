import React from "react";


function AnimatedOffice() {
  return (
    <div style={{position:'relative', border:'1px solid red',transform:'translate(-50%,-50%)'}}>
     
      <img
        data-aos="fade-right"
        className="image1"
        src="images/office_room/image1.png"
        alt=""
      />
      <img
        className="image2"
        data-aos="fade-down"
        src="images/office_room/image2.png"
        alt=""
      />
      <img
        className="image3"
        data-aos="fade-down"
        src="images/office_room/image3.png"
        alt=""
      />
      <img
        className="image4"
        data-aos="fade-right"
        src="images/office_room/image4.png"
        alt=""
      />
      <img
        className="image5"
        data-aos="fade-left"
        src="images/office_room/image5.png"
        alt=""
      />
      <img
        class="image6"
        data-aos="fade-down"
        src="images/office_room/image6.png"
        alt=""
      />
      <img
        class="image7"
        data-aos="fade-right"
        src="images/office_room/image7.png"
        alt=""
      />
      <img
        class="image8"
        data-aos="fade-right"
        src="images/office_room/image8.png"
        alt=""
      />
    </div>
  );
}

export default AnimatedOffice;

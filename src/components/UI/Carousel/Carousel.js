import React from "react";

import styles from "./Carousel.module.css";
import { Carousel } from "react-bootstrap";

const carouselEl = (props) => {
  let carousel = (
    <div className={styles.carousel}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={props.pic1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={props.pic2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={props.pic3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={props.pic4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={props.pic5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );

  if (props.onePicture === true) {
    carousel = (
      <div className={styles.carousel}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block" src={props.pic1} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  return <div className={styles.carousel}>{carousel}</div>;
};

export default carouselEl;

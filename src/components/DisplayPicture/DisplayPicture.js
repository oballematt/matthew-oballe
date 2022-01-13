import React from "react";

import styles from "./DisplayPicture.module.css";
import Modal from "../UI/Modal/Modal";
import Carousel from "../UI/Carousel/Carousel";

const DisplayPicture = (props) => {
  let display = <h1 className={styles.overlay}>See More</h1>;

  if (props.display === "false") {
    display = null;
  }


  return (
    <>
      <Modal show={props.show} closed={props.closed}>
        <div className={styles.scroll}>
          <Carousel
            pic1={props.pic1}
            pic2={props.pic2}
            pic3={props.pic3}
            pic4={props.pic4}
            pic5={props.pic5}
            onePicture={props.onePicture}
          />
          <h1 className={styles.mobileTitle}>{props.title}</h1>
          <p>{props.description}</p>
          <div className={styles.button}>
            <a href={props.demo} rel="noreferrer" target="_blank">
              <button type="button" className="btn btn-outline-info">
                DEMO
              </button>
            </a>
            <a href={props.source} rel="noreferrer" target="_blank">
              <button type="button" className="btn btn-outline-info">
                Source Code
              </button>
            </a>
          </div>
          <hr />
        </div>
      </Modal>

      <div className={`${styles.text} col`}>
        <h1>{props.title}</h1>
        <div
          className={styles.picture}
          style={{
            backgroundImage: `url(${props.picture})`,
            borderRadius: props.style,
            marginTop: props.margin,
          }}
          onClick={props.clicked}
        >
          {display}
        </div>
      </div>
    </>
  );
};

export default DisplayPicture;

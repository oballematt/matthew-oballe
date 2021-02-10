import React from 'react'

import styles from './DisplayPicture.module.css'
import Modal from '../UI/Modal/Modal'
import Carousel from '../UI/Carousel/Carousel'

const DisplayPicture = (props) => {

    let display =  <h1 className={styles.overlay}>See More</h1>

    if (props.display === 'false' ) {
        display = null
    }
  
   
    return (
        <>
            <Modal projectAction={props.projectAction} show={props.show} closed={props.closed} >
              <Carousel pic1={props.pic1} pic2={props.pic2} pic3={props.pic3} pic4={props.pic4} pic5={props.pic5}  />
                <h1 >{props.title}</h1>
                <p>{props.description}</p>
                <div className={styles.button}>
                    <button style={{width: '200px', height: '80px'}} type="button" className="btn btn-outline-info">View the project</button>
                    <button style={{marginLeft: '20px', width: '200px'}} type="button" className="btn btn-outline-info">View the repo</button>
                </div>
                <hr/>
            </Modal>
                <div className={styles.picture} style={{ backgroundImage: `url(${props.picture})` }} onClick={props.clicked}>
                    <h1 className={styles.text}>{props.title}</h1>
                    {display}
                </div>
        </>
    )
}

export default DisplayPicture

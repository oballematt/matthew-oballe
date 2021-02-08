import React, { useReducer } from 'react'

import styles from './DisplayPicture.module.css'
import Modal from '../UI/Modal/Modal'
import Carousel from '../UI/Carousel/Carousel'

const DisplayPicture = (props) => {
    const [data, dispatch] = useReducer((state, action) => {
        if (action === props.projectAction) {
            return state
        }
    }, {
        title: props.title,
        description: props.description,
        pic1: props.pic1,
        pic2: props.pic2,
        pic3: props.pic3
    })
   
    return (
        <>
            <Modal projectAction={props.projectAction} show={props.show} closed={props.closed} >
              <Carousel pic1={data.pic1} pic2={data.pic2} pic3={data.pic3}  />
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
                <div className={styles.button}>
                    <button style={{width: '100px'}} type="button" className="btn btn-outline-info">View the project</button>
                    <button style={{marginLeft: '20px', width: '100px'}} type="button" className="btn btn-outline-info">View the repo</button>
                </div>
                <hr/>
            </Modal>
                <div className={styles.picture} style={{ backgroundImage: `url(${props.picture})` }} onClick={() => { props.clicked(); dispatch(props.projectAction) }}>
                    <h1 className={styles.text}>{props.title}</h1>
                    <h1 className={styles.overlay}>See More</h1>
                </div>
        </>
    )
}

export default DisplayPicture

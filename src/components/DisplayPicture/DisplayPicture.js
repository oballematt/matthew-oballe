import React, { useReducer } from 'react'

import styles from './DisplayPicture.module.css'
import Modal from '../UI/Modal/Modal'

const DisplayPicture = (props) => {
    const [data, dispatch] = useReducer((state, action) => {
        if (action === props.projectAction) {
            return state
        }
    }, {
        title: props.title,
        description: props.description
    })
   
    return (
        <>
            <Modal projectAction={props.projectAction} show={props.show} closed={props.closed} >
                <div id="carouselExampleControls" className="carousel slide"  data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={props.pic1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={props.pic2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={props.pic3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
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

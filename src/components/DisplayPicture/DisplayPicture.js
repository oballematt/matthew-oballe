import React, { useReducer } from 'react'

import styles from './DisplayPicture.module.css'
import Modal from '../UI/Modal/Modal'

const DisplayPicture = (props) => {
    const [data, dispatch] = useReducer((state, action) => {
        if (action === props.projectAction) {
        return state
        } 
    }, props.title)
    return (
        <>
        <Modal projectAction={props.projectAction} show={props.show} closed={props.closed} >
            <h1>{data}</h1>
            </Modal>
        <div className={styles.picture} style={{backgroundImage: `url(${props.picture})`}} onClick={() => {props.clicked(); dispatch(props.projectAction)}}>
            <h1 className={styles.text}>{props.title}</h1>
        </div>
        </>
    )
}

export default DisplayPicture

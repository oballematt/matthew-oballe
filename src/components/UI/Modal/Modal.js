import React from 'react'

import Backdrop from '../BackDrop/BackDrop'
import styles from './Modal.module.css'



const Modal = (props) => {
   
    return (
        <div>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={styles.modal}  style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0', backgroundColor: props.color}}>
                {props.children}
                <div className={styles.button}>
                <button className='btn btn-outline-danger' onClick={props.closed}>Close</button>
                </div>
             </div> 
        </div>
    )
}

export default Modal

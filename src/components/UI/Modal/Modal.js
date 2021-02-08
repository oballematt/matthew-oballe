import React from 'react'

import styles from './Modal.module.css'



const Modal = (props) => {
   
    return (
        <div>
            <div className={styles.modal}  style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
                {props.children}
                <button onClick={props.closed}>Close</button>
             </div> 
        </div>
    )
}

export default Modal

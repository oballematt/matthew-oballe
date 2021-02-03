import React from 'react'

import styles from './Icon.module.css'

const Icon = (props) => {
    return (
        <div className={styles.backGround}>
            <a href={props.link}  target="_blank" rel='noreferrer'>
                <i className={props.icon}></i>
            </a>
        </div>
      
    )
}

export default Icon

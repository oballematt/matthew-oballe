import React from 'react'

import styles from './DisplayPicture.module.css'

const displayPicture = (props) => {
    return (
        <div className={styles.picture} style={{backgroundImage: `url(${props.picture})`}}>
            <h1 className={styles.text}>{props.title}</h1>
        </div>
    )
}

export default displayPicture

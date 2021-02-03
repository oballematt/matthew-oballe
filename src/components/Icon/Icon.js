import React from 'react'

import styles from './Icon.module.css'

const Icon = (props) => {
    return (
        <div className={styles.hover}>
            <a href={props.link} target="_blank" rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={props.iconClass} viewBox="0 0 16 16">
                <path d={props.iconPath}/>
                </svg>
            </a>
        </div>
      
    )
}

export default Icon

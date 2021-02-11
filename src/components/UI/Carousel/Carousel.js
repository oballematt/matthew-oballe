import React from 'react'

import styles from './Carousel.module.css'
import { Carousel } from 'react-bootstrap'


const carousel = (props) => {
    return (
        <div className={styles.carousel}>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block"
                        src={props.pic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={props.pic2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={props.pic3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={props.pic4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={props.pic5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default carousel

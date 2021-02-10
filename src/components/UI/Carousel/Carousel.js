import React from 'react'

import styles from './Carousel.module.css'
import { Carousel } from 'react-bootstrap'


const carousel = (props) => {
    return (
        <div>
            <Carousel className={styles.carousel}>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={props.pic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.pic2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.pic3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.pic4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.pic5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default carousel

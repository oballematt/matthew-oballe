import React from 'react'

import { Carousel } from 'react-bootstrap'


const carousel = (props) => {
    return (
        <div>
            <Carousel>
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
            </Carousel>
        </div>
    )
}

export default carousel

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carrousel = (props) => {
    const pictures = props.source;
    const length = props.slides;

    const [current, setCurrent] = useState(0);
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <>
            <span className="arrow" onClick={previousSlide}>
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
            </span>
            <span className="arrow" onClick={nextSlide}>
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
            </span>
            <div className="carrousel">
                {pictures.map((picture, index) => (
                    <div key={index} className={index}>
                        {index === current && <img src={picture} alt="" />}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Carrousel;

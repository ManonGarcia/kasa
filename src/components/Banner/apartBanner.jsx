import React, { useState } from "react";

function ApartBanner(props) {
    const pictures = props.pictures;
    const [currentPicture, setCurrentPicture] = useState(0);
    const addClass = (i) => {
        if(i === currentPicture) return "visible";
        return "";
    };

    const toPrevious = () => {
        const newCurrentPicture = currentPicture -1;
        if(newCurrentPicture < 0) {
            setCurrentPicture(pictures.length -1);
            return;
        }
        setCurrentPicture((currentPicture - 1));
    };
    const toNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    return (
        <div className="apartment_img">
            <div className="apartment_img_array">
                {pictures.map((picture, i) => (
                    <img key={picture} src={picture} alt="" className={addClass(i)}></img>
                ))}
            </div>
            <div className="img_array_btn">
                <i className="fa-solid fa-chevron-left btn img_btn_next" onClick={toPrevious}></i>
                <i className="fa-solid fa-chevron-right btn img_btn_previous" onClick={toNext}></i>
            </div>
            <p className="picturesCounter">{currentPicture + 1} / {pictures.length}</p>
        </div>
    )
};

export default ApartBanner;
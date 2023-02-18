import React from "react";

function ApartBanner(props) {
    return (
        <div className="apartment_img">
            <img src={ props.imgUrl } alt="Banner" />
        </div>
    )
};

export default ApartBanner;
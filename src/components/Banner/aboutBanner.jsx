import React from "react";
import BannerAbout from "../../assets/BannerAbout.png"

function AboutBanner(props) {
    return (
        <div className="about_img">
            <img src={ BannerAbout } alt="Banner" />
        </div>
    )
};

export default AboutBanner;
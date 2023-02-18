import React from "react";
import Banner from "../../components/Banner/aboutBanner";
import Dropdown from "../../components/Dropdown";

function About() {
    return (
        <div>
            <Banner />
            <div className="about_dropdown">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    )
}

export default About;
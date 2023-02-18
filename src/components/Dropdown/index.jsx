import React from "react";

function Dropdown(props) {
    return (
        <div className="apartment_utils">
            <div className="apartment_utils_title">
                <h4>{props.title}</h4>
                <i className="fa-solid fa-chevron-up"></i>
            </div>

            <p className="apartment_utils_text">{props.content}</p>
        </div>
    )
};

export default Dropdown;
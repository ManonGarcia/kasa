import React, { useState } from "react";

function Dropdown(props) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const viewContent = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const dropdown = dropdownVisible ? "apartment_utils_text open" : "apartment_utils_text close";
    const chevron = dropdownVisible ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
    
    return (
        <div className="apartment_utils">
            <div className="apartment_utils_title" onClick={viewContent}>
                <h4>{props.title}</h4>
                <i className={chevron}></i>
            </div>

            <p className={dropdown}>{props.content}</p>
        </div>
    )
};

export default Dropdown;
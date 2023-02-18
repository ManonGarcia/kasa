import React from "react";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
    return (
        <Link to="/apart" state={{apartId: props.id}}>
            <div className="card_apartement">
                <img src={props.imgUrl} alt="" />
                <div className="card_apart_name">{props.title}</div>
            </div>
        </Link>
    )
};

export default ApartmentCard;
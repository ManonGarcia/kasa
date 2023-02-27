import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ApartmentCard(props) {
    const params = useParams();
    console.log(params);
    return (
        <Link to={`/apart/${props.id}`} state={{apartId: props.id}}>
            <div className="card_apartement">
                <img src={props.imgUrl} alt="" />
                <div className="card_apart_name">{props.title}</div>
            </div>
        </Link>
    )
};

export default ApartmentCard;
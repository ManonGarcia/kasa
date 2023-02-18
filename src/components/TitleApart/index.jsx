import React from "react";

function ApartTitle(props) {
    return (
        <div className="apartment_title">
            <div className="apartment_name">
                <h1>{props.apart.title}</h1>
                <p>{props.apart.location}</p>
                <div className="apartment_tags">
                    {props.apart.tags.map((tag) => (<p className="tag">{tag}</p>))}
                </div>
            </div>

            <div className="apartment_owner">
                <div className="owner">
                    <h3>{props.apart.host.name}</h3>
                    <img src={props.apart.host.picture} alt="" />
                </div>
                <div className="apartment_stars">
                    {[1, 2, 3, 4, 5].map((nb) => <i className={props.apart.rating >= nb ? "fa-solid fa-star full" : "fa-solid fa-star"}></i>)}
                </div>
            </div>
            
        </div>
    )
};

export default ApartTitle;
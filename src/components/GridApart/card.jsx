import React, { useEffect, useState } from "react";
import Apartement from "./apart";


function CardOfApartments() {
    const [aparts, setAparts] = useState([]);
    useEffect(fetchAparts, []);

    function fetchAparts() {
        fetch("logements.json")
            .then((res) => res.json())
            .then((res) => setAparts(res))
            .catch(console.error);
    };
    
    return (
        <div className="card">
            {aparts.map((apart, i) => (
                <Apartement title={apart.title} imgUrl={apart.cover} id={apart.id} key={i}/>
            ))}
        </div>
    )
};

export default CardOfApartments;
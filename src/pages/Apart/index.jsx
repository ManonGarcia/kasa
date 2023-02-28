import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import ApartBanner from "../../components/Banner/apartBanner";
import ApartTitle from "../../components/TitleApart";
import Error from "../../components/Error";
import { useParams } from "react-router-dom";

function Apartment() {
    const { id } = useParams();
    const [apart, setApart] = useState(null);
    useEffect(fetchDataApart, []);

    function fetchDataApart() {
        fetch("../logements.json")
            .then((res) => res.json())
            .then((aparts) => {
                const apart = aparts.find((apart) => apart.id === id);
                setApart(apart);
            })
            .catch(console.error);
    }

    if(apart === false) return (
        <Error />
    );

    if(apart === null) return (
        <div class="spinner">
            <div></div><div></div><div></div><div></div><div></div>
        </div>
    );
    
    return (
        <div className="apartment">
            <ApartBanner pictures={apart.pictures} />
            <ApartTitle apart={apart} />
            
            <div className="apartment_description">
                <Dropdown title="Description" content={apart.description}/>
                <Dropdown title="Equipements" content={apart.equipments.map((equipment, i) => <li key={i}>{equipment}</li>)}/>
            </div>
        </div>
    )
};

export default Apartment; 
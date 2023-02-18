import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import ApartBanner from "../../components/Banner/apartBanner";
import ApartTitle from "../../components/TitleApart";
import { useLocation } from "react-router-dom";

function Apartment() {
    const location = useLocation();
    const [apart, setApart] = useState(null);
    useEffect(fetchDataApart, []);

    function fetchDataApart() {
        fetch("logements.json")
            .then((res) => res.json())
            .then((aparts) => {
                const apart = aparts.find((apart) => apart.id === location.state.apartId);
                setApart(apart);
            })
            .catch(console.error);
    }

    if(apart == null) return <div>...Loading</div>;
    
    return (
        <div className="apartment">
            <ApartBanner imgUrl={apart.cover} />
            <ApartTitle apart={apart} />
            
            <div className="apartment_description">
                <Dropdown title="Description" content={apart.description}/>
                <Dropdown title="Equipements" content={apart.equipments.map(equipment => <li>{equipment}</li>)}/>
            </div>
        </div>
    )
};

export default Apartment; 
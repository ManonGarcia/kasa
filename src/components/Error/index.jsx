import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header"

function Error() {
    return (
        <div>
            <Header />
            <div className="error_container">
                <div className="error_titles">
                    <h1>404</h1>
                    <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                </div>
                <Link to="/">
                    <p>Retourner sur la page d'accueil</p>
                </Link> 
            </div>
        </div>
    )
};

export default Error;
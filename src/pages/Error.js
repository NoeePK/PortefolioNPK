import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = () => {
    return (
        <section className="error-container">
            <FontAwesomeIcon icon="fa-solid fa-circle-question" />
            <h1>La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    );
};

export default Error;

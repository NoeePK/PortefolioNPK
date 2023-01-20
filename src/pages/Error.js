import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="error-container">
            <FontAwesomeIcon icon="fa-solid fa-circle-question" />
            <h1>Oups ! La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    );
};

export default Error;

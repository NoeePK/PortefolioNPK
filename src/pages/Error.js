import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/circle-question-solid.svg";

const Error = () => {
    return (
        <section className="error-container">
            <img src={logo} />
            <h1>La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    );
};

export default Error;

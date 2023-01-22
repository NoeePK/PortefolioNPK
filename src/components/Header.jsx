import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Noée Pisano</h1>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/CV">CV</Link>
            </nav>
        </header>
    );
};

export default Header;

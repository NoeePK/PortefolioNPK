import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header>
            {/* Une image ou logo ? */}
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/CV">CV</Link>
            </nav>
        </header>
    );
};

export default Header;

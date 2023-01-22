import React from "react";

// Importer les composants
import Thumb from "../components/Thumb";
import javascript from "../assets/square-js.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/node-js.svg";
import sass from "../assets/sass.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

import user from "../assets/user.svg";

const Home = () => {
    return (
        <section className="main-wrap">
            <article className="bio-wrap">
                <div className="bio">
                    <h2>Bio</h2>
                    <p>
                        Manifeste sur ma vision du code/développement, ce que
                        j'aime et recherche
                    </p>
                </div>
                <img src={user} alt="user"></img>
            </article>
            <aside>
                <ul className="tools-wrap">
                    <li className="logo-style">
                        <img src={javascript} alt="Javascript" />
                        <h3>Javascript</h3>
                    </li>
                    <li className="logo-style">
                        <img src={react} alt="React" />
                        <h3>React</h3>
                    </li>
                    <li className="logo-style">
                        <img src={nodejs} alt="Node-js" />
                        <h3>Node.js</h3>
                    </li>
                    <li className="logo-style">
                        <img src={sass} alt="Sass" />
                        <h3>Sass</h3>
                    </li>
                    <li className="logo-style">
                        <img src={html} alt="HTML" />
                        <h3>HTML</h3>
                    </li>
                    <li className="logo-style">
                        <img src={css} alt="CSS" />
                        <h3>CSS</h3>
                    </li>
                </ul>
            </aside>
            <div className="thumbs-wrap">
                <Thumb />
            </div>
        </section>
    );
};

export default Home;

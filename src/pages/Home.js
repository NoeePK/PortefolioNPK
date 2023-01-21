import React from "react";

// Importer les composants
import Thumb from "../components/Thumb";
import javascript from "../assets/square-js.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/node-js.svg";
import sass from "../assets/sass.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

const Home = () => {
    return (
        <section className="main-wrap">
            <h1>Hullo, je m'appelle Noée Pisano</h1>
            <article className="bio-wrap">
                <h2>Bio</h2>
                <p>
                    Manifeste sur ma vision du code/développement, ce que j'aime
                    et recherche
                </p>
                <div className="tools-wrap">
                    <ul className="tools-list">
                        <li>
                            <img src={javascript} />
                            <h3>Javascript</h3>
                        </li>
                        <li>
                            <img src={react} />
                            <h3>React</h3>
                        </li>
                        <li>
                            <img src={nodejs} />
                            <h3>Node.js</h3>
                        </li>
                        <li>
                            <img src={sass} />
                            <h3>Sass</h3>
                        </li>
                        <li>
                            <img src={html} />
                            <h3>HTML</h3>
                        </li>
                        <li>
                            <img src={css} />
                            <h3>CSS</h3>
                        </li>
                    </ul>
                </div>
            </article>
            <div className="thumbs-wrap">
                <Thumb />
            </div>
        </section>
    );
};

export default Home;

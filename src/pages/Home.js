import React from "react";

// Importer les composants
import Thumb from "../components/Thumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                            <FontAwesomeIcon icon="fa-brands fa-square-js" />
                            <h3>Javascript</h3>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-react" />
                            <h3>React</h3>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-node-js" />
                            <h3>Node.js</h3>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-sass" />
                            <h3>Sass</h3>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-html5" />
                            <h3>HTML</h3>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
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

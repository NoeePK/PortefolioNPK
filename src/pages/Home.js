import React from "react";

// Importer les composants
import Carrousel from "../components/Carrousel"

const Home = () => {
    return (
        <section className="main-wrap">
            <h1>Hullo, je m'appelle Noée Pisano</h1>
            <article className="intro-wrap">
                <div>{/* Me présenter */}</div>
                {/* Lien quelque part vers CV */}
                <div>
                    {/* Manifeste sur ma vision du code/développement, ce que j'aime et recherche */}
                </div>
                <div>
                    {/* Liste des langages avec icon et nom en dessous */}
                </div>
            </article>
            <Carrousel />
            <article>
                <div>{/* Liens linkedin et github */}</div>
                <div>
                    {/* Contact formulaire ou lien vers page avec un formulaire */}
                </div>
            </article>
        </section>
    );
};

export default Home;
